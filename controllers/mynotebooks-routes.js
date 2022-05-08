const router = require("express").Router();
const { User, Notebook, Note } = require("../models");

// get all notebooks for My Notebooks
router.get("/", (req, res) => {
  Notebook.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "notebook_name", "created_at"],
    include: [
      {
        model: Note,
        attributes: ["id", "question", "answer", "notebook_id"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((notebookData) => {
      const notebooks = notebookData.map((notebook) =>
        notebook.get({ plain: true })
      );
      res.render("mynotebooks", { notebooks, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single notebook (view notebook)
router.get("notebooks/:id", (req, res) => {
  Notebook.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "notebook_name", "created_at"],
    include: [
      {
        model: Note,
        attributes: ["id", "question", "answer", "notebook_id"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((notebookData) => {
      if (!notebookData) {
        res.status(404).json({ message: "No notebook found with this id" });
        return;
      }
      const notebook = notebookData.get({ plain: true });

      res.render("view-notebook", {
        notebook,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// edit notebook
router.get("/edit/:id", (req, res) => {
  Notebook.findByPk(req.params.id, {
    attributes: ["id", "notebook_name", "created_at"],
    include: [
      {
        model: Note,
        attributes: ["id", "question", "answer", "notebook_id"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((notebookData) => {
      if (notebookData) {
        const notebook = notebookData.get({ plain: true });

        res.render("edit-notebook", {
          notebook,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;

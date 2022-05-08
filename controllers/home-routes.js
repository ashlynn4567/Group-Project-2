const router = require("express").Router();

const { User, Notebook, Note } = require("../models");

// get all notebooks for homepage
router.get("/", (req, res) => {
  Notebook.findAll({
    attributes: ["id", "notebook_name", "created_at"],
    include: [
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

      res.render("homepage", {
        notebooks,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single notebook (when user clicks on a notebook)
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

// check if logged in- direct to homepage if yes, direct to login page if no
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;

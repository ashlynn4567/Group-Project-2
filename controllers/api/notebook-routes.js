const router = require("express").Router();
const { Notebook, User, Note } = require("../../models");
const withAuth = require("../../utils/auth");

// get all notebooks
router.get("/", (req, res) => {
  Notebook.findAll({
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
    .then((dbNotebookData) => res.json(dbNotebookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one notebook by ID
router.get("/:id", (req, res) => {
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
    .then((dbNotebookData) => {
      if (!dbNotebookData) {
        res.status(404).json({ message: "No notebook found with this id" });
        return;
      }
      res.json(dbNotebookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new notebook
router.post("/", withAuth, (req, res) => {
  // expects {notebook_name: 'Spanish Numbers', user_id: 1}
  Notebook.create({
    notebook_name: req.body.notebook_name,
    user_id: req.session.user_id,
  })
    .then((dbNotebookData) => res.json(dbNotebookData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete notebook
router.delete("/:id", withAuth, (req, res) => {
  Notebook.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbNotebookData) => {
      if (!dbNotebookData) {
        res.status(404).json({ message: "No notebook found with this id" });
        return;
      }
      res.json(dbNotebookData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

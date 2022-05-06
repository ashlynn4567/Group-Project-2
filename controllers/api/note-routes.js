const router = require("express").Router();
const { Note, Notebook, User } = require("../../models");

// get all notes
router.get("/", (req, res) => {
  Note.findAll()
    .then((noteData) => res.json(noteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one note
router.get("/:id", (req, res) => {
  Note.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "question", "answer"],
    include: [
      {
        model: Notebook,
        attributes: ["id", "notebook_name", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((noteData) => {
      if (!noteData) {
        res.status(404).json({ message: "No note found with this id " });
        return;
      }
      res.json(noteData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create note
router.post("/", (req, res) => {
  // expects {question: '10 + 11 = ?', answer: '20', notebook_id: 1}
  Note.create({
    question: req.body.question,
    answer: req.body.answer,
    notebook_id: req.body.notebook_id,
  })
    .then((noteData) => res.json(noteData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// edit note
router.put("/:id", (req, res) => {
  // expects {question: '10 + 11 = ?', answer: '21'}
  Note.update(
    {
      question: req.body.question,
      answer: req.body.answer,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((noteData) => {
      if (!noteData) {
        res.status(404).json({ message: "No note found with this id" });
        return;
      }
      res.json(noteData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete note
router.delete("/:id", (req, res) => {
  Note.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((noteData) => {
      if (!noteData) {
        res.status(404).json({ message: "No note found with this id!" });
        return;
      }
      res.json(noteData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
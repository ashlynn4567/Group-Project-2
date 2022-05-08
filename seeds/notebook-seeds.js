const { Notebook } = require("../models");

const notebookData = [
  {
    notebook_name: "Addition",
    user_id: 1,
  },
  {
    notebook_name: "Subtraction",
    user_id: 1,
  },
  {
    notebook_name: "Presidents",
    user_id: 2,
  },
  {
    notebook_name: "States & Capitals",
    user_id: 2,
  },
  {
    notebook_name: "Multiplication",
    user_id: 3,
  },
  {
    notebook_name: "Division",
    user_id: 3,
  },
  {
    notebook_name: "Periodic Table",
    user_id: 4,
  },
  {
    notebook_name: "Vocabulary",
    user_id: 4,
  },
  {
    notebook_name: "Parts of Speech",
    user_id: 5,
  },
  {
    notebook_name: "Spanish Vocabulary",
    user_id: 5,
  },
];

const seedNotebooks = () => Notebook.bulkCreate(notebookData);

module.exports = seedNotebooks;

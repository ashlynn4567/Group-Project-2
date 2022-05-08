// This file imports the models and exports objects with them as a property

const User = require("./User");
const Notebook = require("./Notebook");
const Note = require("./Note");

// associations between tables

// creates the reference for the id column in the User model to link to the corresponding foreign key pair, which is the user_id in the Notebook model.
User.hasMany(Notebook, {
  foreignKey: "user_id",
});

// makes the reverse association- defines the relationship of the Notebook model to the User
Notebook.belongsTo(User, {
  foreignKey: "user_id",
});

// creates the reference for the id column in the Notebook model to link to the corresponding foreign key pair, which is the notebook_id in the Note model.
Notebook.hasMany(Note, {
  foreignKey: "notebook_id",
});

// makes the reverse association- defines the relationship of the Note model to the Notebook
Note.belongsTo(Notebook, {
  foreignKey: "notebook_id",
});

module.exports = { User, Notebook, Note };

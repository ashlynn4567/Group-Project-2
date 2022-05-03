// This file collects the API endpoints and gives them their prefixed name

const router = require("express").Router();

// prefixes routes in user-routes.js with the path /users
const userRoutes = require("./user-routes");
router.use("/users", userRoutes);

// prefixes routes in notebook-routes.js with the path /notebooks
const notebookRoutes = require("./notebook-routes");
router.use("/notebooks", notebookRoutes);

// prefixes routes in note-routes.js with the path /notes
const noteRoutes = require("./note-routes");
router.use("/notes", noteRoutes);

module.exports = router;

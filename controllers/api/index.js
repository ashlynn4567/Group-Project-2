// This file collects the API endpoints and gives them their prefixed name

const router = require("express").Router();

const userRoutes = require("./user-routes");
const notebookRoutes = require("./notebook-routes");
const noteRoutes = require("./note-routes");


router.use("/users", userRoutes);
router.use("/notebooks", notebookRoutes);
router.use("/notes", noteRoutes);

module.exports = router;

const seedUsers = require("./user-seeds");
const seedNotebooks = require("./notebook-seeds");
const seedNotes = require("./note-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("/n----- DATABASE SYNCED -----/n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedNotebooks();
  console.log("\n----- NOTEBOOKS SEEDED -----\n");

  await seedNotes();
  console.log("\n----- NOTES SEEDED -----\n");

  process.exit(0);
};

seedAll();

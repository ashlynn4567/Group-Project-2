const { User } = require("../models");

const userData = [
  {
    username: "sam",
    email: "sam@gmail.com",
    password: "sampassword",
  },
  {
    username: "trevor",
    email: "trevor@gmail.com",
    password: "trevorpassword",
  },
  {
    username: "monica",
    email: "monica@gmail.com",
    password: "monicapassword",
  },
  {
    username: "izzy",
    email: "izzy@gmail.com",
    password: "izzypassword",
  },
  {
    username: "hannah",
    email: "hannah@gmail.com",
    password: "hannahpassword",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

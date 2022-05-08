const { Note } = require("../models");

const noteData = [
  {
    question: "5 + 7 = ?",
    answer: "12",
    notebook_id: 1,
  },
  {
    question: "8 + 9 = ?",
    answer: "17",
    notebook_id: 1,
  },
  {
    question: "11 + 13 = ?",
    answer: "24",
    notebook_id: 1,
  },
  {
    question: "33 - 3 = ?",
    answer: "30",
    notebook_id: 2,
  },
  {
    question: "20 - 7 = ?",
    answer: "13",
    notebook_id: 2,
  },
  {
    question: "15 - 2 = ?",
    answer: "13",
    notebook_id: 2,
  },
  {
    question: "The first American president to live in the White House was:",
    answer: "John Adams",
    notebook_id: 3,
  },
  {
    question: "What American president is associated with the Teddy Bear?",
    answer: "Theodore Roosevelt",
    notebook_id: 3,
  },
  {
    question: "Who was named president after Abraham Lincoln was assassinated?",
    answer: "Andrew Johnson",
    notebook_id: 3,
  },
  {
    question: "Arizona",
    answer: "Phoenix",
    notebook_id: 4,
  },
  {
    question: "Indiana",
    answer: "Indianapolis",
    notebook_id: 4,
  },
  {
    question: "Ohio",
    answer: "Columbus",
    notebook_id: 4,
  },
  {
    question: "5 x 5 = ?",
    answer: "25",
    notebook_id: 5,
  },
  {
    question: "6 x 6 = ?",
    answer: "36",
    notebook_id: 5,
  },
  {
    question: "7 x 7 = ?",
    answer: "49",
    notebook_id: 5,
  },
  {
    question: "64 / 8 = ?",
    answer: "8",
    notebook_id: 6,
  },
  {
    question: "81 / 9 = ?",
    answer: "9",
    notebook_id: 6,
  },
  {
    question: "16 / 4 =?",
    answer: "4",
    notebook_id: 6,
  },
  {
    question: "Co",
    answer: "Cobalt",
    notebook_id: 7,
  },
  {
    question: "Na",
    answer: "Sodium",
    notebook_id: 7,
  },
  {
    question: "Mg",
    answer: "Magnesium",
    notebook_id: 7,
  },
  {
    question: "antipathy",
    answer: "a natural, basic, or habitual repugnance; aversion",
    notebook_id: 8,
  },
  {
    question: "promulgate",
    answer:
      "to make known by open declaration; publish; proclaim formally or put into operation",
    notebook_id: 8,
  },
  {
    question: "ramify",
    answer: "to divide into branches or branchlike parts",
    notebook_id: 8,
  },
  {
    question: "noun",
    answer: "a person, place, or thing",
    notebook_id: 9,
  },
  {
    question: "verb",
    answer: "a word that expresses action",
    notebook_id: 9,
  },
  {
    question: "adjective",
    answer: "a word used to describe a noun or pronoun",
    notebook_id: 9,
  },
  {
    question: "sun",
    answer: "sol",
    notebook_id: 10,
  },
  {
    question: "hot",
    answer: "caliente",
    notebook_id: 10,
  },
  {
    question: "family",
    answer: "familia",
    notebook_id: 10,
  },
];

const seedNotes = () => Note.bulkCreate(noteData);

module.exports = seedNotes;

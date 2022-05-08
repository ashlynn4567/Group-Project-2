const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create Notebook model
class Notebook extends Model {}

// define Notebook columns
Notebook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    notebook_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "notebook",
  }
);

module.exports = Notebook;

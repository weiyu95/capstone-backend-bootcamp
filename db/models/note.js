"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.cadet);
    }
  }
  Note.init(
    {
      dueBy: DataTypes.DATE,
      cadetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "cadet",
          key: "id",
        },
      },
      input1: DataTypes.TEXT,
      input2: DataTypes.TEXT,
      input3: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "note",
    }
  );
  return Note;
};

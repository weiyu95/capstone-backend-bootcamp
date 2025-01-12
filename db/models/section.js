"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.cadet, {
        through: {
          model: "cadetSection",
          unique: false,
        },
        constraints: false,
      });
      this.hasMany(models.cadetSection);
      this.hasMany(models.chapter);
    }
  }
  Section.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "section",
    }
  );
  return Section;
};

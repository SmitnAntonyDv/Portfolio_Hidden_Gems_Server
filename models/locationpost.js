"use strict";
module.exports = (sequelize, DataTypes) => {
  const locationpost = sequelize.define(
    "locationpost",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      adress: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      latitude: {
        type: DataTypes.FLOAT,
      },
      longitude: {
        type: DataTypes.FLOAT,
      }
    },
    {}
  );
  locationpost.associate = function (models) {
   locationpost.belongsTo(models.user);
  };
  return locationpost;
};
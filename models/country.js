'use strict';
module.exports = (sequelize, DataTypes) => {
  const country = sequelize.define(
    'country',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {}
  );
  locationpost.associate = function (models) {
    country.hasMany(models.locationpost);
  };
  return country;
};

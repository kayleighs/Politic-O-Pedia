module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    party: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vote: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  return Survey;
};

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    commentText: {
      type: DataTypes.STRING,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Comment;
};

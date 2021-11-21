'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class View extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      View.belongsTo(models.User, { foreignKey: 'postId', onDelete: 'CASCADE'})
    }
  };
  View.init({
    postId: DataTypes.INTEGER,
    ip_address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "ip must be unique"
      },
      validate: {
        isIPv4: {
          msg: "invalid ip version"
        },
        notEmpty: {
          msg: "ip cannot empty"
        },
        notNull: {
          msg: "ip cannot null"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'View',
  });
  return View;
};
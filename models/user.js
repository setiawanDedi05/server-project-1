'use strict';
const {
  Model
} = require('sequelize');
const { hashing } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: 'authorId', onDelete: 'CASCADE'})
      User.hasMany(models.Comment, { foreignKey: 'authorId', onDelete: 'CASCADE'})
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: "username already exist"
      },
      allowNull:false,
      validate: {
        notEmpty: {
          msg: "username cannot empty"
        },
        notNull: {
          msg:"username cannot null"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "email already exist",
      },
      allowNull: false,
      validate: {
        isEmail: {
          msg: "invalid email format"
        },
        len: {
          args: [8],
          msg: "invalid password!, length of password must be greather than 8"
        },
        notEmpty: {
          msg: "email cannot empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "password cannot empty"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "role cannot empty"
        }
      }
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance) {
        instance.password = hashing(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
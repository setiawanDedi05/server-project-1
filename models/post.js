'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(models.View, {foreignKey: 'postId', onDelete: 'CASCADE'})
      Post.hasMany(models.Tag, { foreignKey: 'postId', onDelete: 'CASCADE' })
      Post.belongsTo(models.Category, { foreignKey: 'categoryId', onDelete: 'CASCADE' })
      Post.hasMany(models.Comment, { foreignKey: 'postId', onDelete: 'CASCADE'})
      Post.belongsTo(models.User, { foreignKey: 'authorId', onDelete: 'CASCADE'})
    }
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "title cannot empty"
        }
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "slug cannot empty"
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "content cannot empty"
        }
      }
    },
    imgUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "image cannot empty"
        }
      }
    },
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
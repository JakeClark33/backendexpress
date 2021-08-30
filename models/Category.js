const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
      
      Category: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  
  );

  module.exports = Post;
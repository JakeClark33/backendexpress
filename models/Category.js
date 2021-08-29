const { Model, DataTypes, DECIMAL } = require('sequelize');
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
        category_name: DataTypes.STRING,
        allowNull: false
      },
      Product: {
        id: DataTypes.INTEGER,
        allowNull: false,
        key: 'id',
        product_name: DataTypes.STRING,
        allowNull: false,
        price: DECIMAL(5,2),
        allowNull: false,
        validate: {
            isDecimal: true,
        },
        stock: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: [10],
        validate: {
            isNumeric: true,
        category_id: DataTypes.INTEGER,
        references: {
            model: 'category'
        },
        key: 'id',
        }
      },
      ProductTag: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;
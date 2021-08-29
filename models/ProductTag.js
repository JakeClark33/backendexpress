const { Model, DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class ProductTag extends Model {}

// create fields/columns for Post model
ProductTag.init(
    {
      
      ProdauctTags: {
        id: DataTypes.INTEGER,
        autoIncrement: true,
        primarykey: true,
        allowNull: false,
        product_id: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Product',
            key: 'id',
        },
        tag_id: DataTypes.INTEGER,
        references: {
            model: 'Tag',
            key: 'id',
        }

      },
    
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    
    });

  module.exports = ProductTag;
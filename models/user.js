const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // define a CATEGORY column
      Category: {
        type: DataTypes.STRING, 
        allowNull: false
      },

      Product: {
        type: DataTypes.STRING,
        allowNull: false
      },

      // define an email column
      
      Tag: {
        type: DataTypes.STRING,
        allowNull: false,
      
        // there cannot be any duplicate email values in this table
      
        unique: true,
      
        // if allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
          isEmail: true
        }
      },
      // define a password column
      ProductTag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // this means the password must be at least four characters long
          len: [4]
        }
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
  );

module.exports = User;
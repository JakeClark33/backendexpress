const { Model, DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Tag extends Model {}

Tag.Init (
    {
    
    Tags: {
        id: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        reference: {
            model: 'category',
            key:'id',
        },
        tag_name: DataTypes.STRING,
        allowNull: false,
            }
            }
    );

    module.exports = Tag;

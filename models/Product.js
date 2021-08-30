const { Model, DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection');


// create our Post model
class Product extends Model {}

Product.Init (
    {
    
    Products: {
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
    },
    category_id: DataTypes.INTEGER,
    references: {
        model: 'category',
        key: 'id',
    }
    }
});









  module.exports = Product;
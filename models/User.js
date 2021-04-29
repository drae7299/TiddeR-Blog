const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class User extends Model {
   
}

// define table columns and configuration
User.init(
  {
    
    id: {

        type: DataTypes.INTEGER,
        // equivalent of SQL "NOT NULL"
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
    },
    // define a username column
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    // define a password column 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // this means the password must be at least four characters long
            len: [8]
        }
    }
  },
  
);

module.exports = User;
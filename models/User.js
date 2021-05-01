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
    // define user's name
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true 
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  } 
);

module.exports = User;
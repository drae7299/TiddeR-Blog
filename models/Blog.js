const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model{}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        blog_text: {
            type: DataTypes.STRING,
            validate: {
                len: [10]
            }
        },
        channel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'channel',
                key: 'id'
            }

        },
        user_id: {
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
        modelName: 'blog'
    }
);

module.exports = Blog; 
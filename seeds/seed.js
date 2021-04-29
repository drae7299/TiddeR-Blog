const sequelize = require('../config/connection');
const { User, Channel, Comment, Vote, Blog } = require('../models');

const userData = require('./userData.json');
const channelData = require('./projectData.json');
const commentData = require('./commentData.json');
const voteData = require('./voteData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
  

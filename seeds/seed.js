const sequelize = require('../config/connection');
const { User, Channel, Comment, Blog } = require('../models');

const userData = require('./userData.json');
const channelData = require('./channelData.json');
const commentData = require('./commentData.json');
const blogData = require('./blogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Channel.bulkCreate(channelData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();


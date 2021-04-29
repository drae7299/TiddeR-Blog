const router = require('express').Router();

//require routes
const blogRoutes = require('./blogRoutes');
const channelRoutes = require('./channelRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');
const voteRoutes = require('./voteRoutes');

//using routes
router.use('/blog', blogRoutes);
router.use('/channel', channelRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/vote', voteRoutes);

module.exports = router;
const router = require('express').Router();
const { Blog, User, Channel, Comment } = require('../models');
const withAuth = require('../utils/auth');

// show the home page with blog posts - not behind authentication 
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
        /* {
          model: Channel,
          attributes: ['title']
        } */
      ],
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true})); 
    console.log('LOGGED IN ', req.session.logged_in)
    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err); 
  }
});

// Use withAuth middleware to prevent access to route
// do we need this on the homepage route??
// router.get('/', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         include: [{ model: Blog }],
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('signup', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// show channels page - behind authentication
router.get('/channel', withAuth, async (req, res) => {
  try {
    const channelData = await Channel.findAll({
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ],
    });
    const channels = channelData.map((channel) => channel.get( {plain: true})); 

    res.render('channel', {
      ...channels,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err); 
  }
}); 

// show one channel - behind authentication
router.get('/channel/:id', withAuth, async (req, res) => {
  try {
    const channelData = await Channel.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Blog,
          attributes: ['blog_text','user_id']
        },
        {
          model: Comment
        },
      ],
    });
    const channel = channelData.get({ plain: true }); 

    res.render('channel', {
      ...channel,
      logged_in: req.sessions.logged_in
    });
  } catch (err) {
    res.status(500).json(err); 
  }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    /* if (req.session.logged_in) {
      res.redirect('/channel');
      return;
    }; */
  
    res.render('login');
});

  router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/channel');
      return;
    };

    res.render('signup'); 
  });
  
  module.exports = router;
const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  //Make so if user is not logged in, when they click home from signup that it doesnt automatically sign them in by default
  module.exports = withAuth;
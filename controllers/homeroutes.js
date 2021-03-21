const router = require('express').Router();
const { Blog } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      order: [['createdAt', 'ASC']],
    })
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render('homepage', {
      blogs,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/dash', withAuth, (req, res) => {
  res.render('dash', {
    loggedIn: req.session.logged_in
  });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/logout', (req, res) => {
  res.render('logout', {
    loggedIn: req.session.logged_in
  });
});

module.exports = router;
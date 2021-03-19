const router = require('express').Router();
const { Blog } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({})
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {
            blogs,
        });
    } catch (err) {
        res.status(500).json(err)
    }
}) 

router.get('/dash', withAuth, (req, res) => {
    res.render('dash');
  });

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

module.exports = router;
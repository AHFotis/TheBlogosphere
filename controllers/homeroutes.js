const router = require('express').Router();
const { Blog } = require('../models')
const withAuth = require('../utils/auth')

//Render homepage
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
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

//render login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

//render signup page
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

// router.post('/signup', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//render logout page
router.get('/logout', (req, res) => {
  res.render('logout', {
    loggedIn: req.session.logged_in
  });
})


module.exports = router;
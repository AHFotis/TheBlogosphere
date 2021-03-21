const router = require('express').Router();
const { Blog, User, Comments } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
     
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

// router.get('/dash', withAuth, (req, res) => {
//   res.render('dash', {
//     loggedIn: req.session.logged_in
//   });
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/logout', (req, res) => {
  res.render('logout', {
    loggedIn: req.session.logged_in
  });
});

router.get('/dash', withAuth, async (req, res) => {
  try {
      const blogData = await Blog.findAll({
          where: {
              user_id: req.session.user_id,
          },
          attributes: ["id", "content", "title", "createdAt"],
          // include: [
          // { model: User, attributes: ["name"] },
          // { model: Comments, attributes: ["id", "text", "user_id", "blog_id"],
          //     include: {
          //         model: User, attributes: ['name'],
          //     }
          // }]
      })
      
      console.log("TEST" + blogData)
      if (!blogData) {
          res.status(404).json({
              message: "No post found with this id"
          });
          return;
      }

      const blogs = blogData.map((blog) => blog.get({ plain: true }));
     console.log(blogs)

      res.render('dash', {
          blogs,
          loggedIn: req.session.logged_in
      })

  } catch (err) {
      res.status(500).json(err)
  }
})

router.get("/newblog", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('newblog');
})


module.exports = router;
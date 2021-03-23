const router = require('express').Router();
const { Blog, User, Comments } = require('../models')
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

//render logout page
router.get('/logout', (req, res) => {
  res.render('logout', {
    loggedIn: req.session.logged_in
  });
});

// //render dashboard
// router.get('/dash', withAuth, async (req, res) => {
//   try {
//     const blogData = await Blog.findAll({
//       where: {
//         user_id: req.session.user_id,
//       },
//       attributes: ["id", "content", "title", "createdAt"],
//     })

//     console.log("TEST" + blogData)
//     if (!blogData) {
//       res.status(404).json({
//         message: "No post found with this id"
//       });
//       return;
//     }

//     const blogs = blogData.map((blog) => blog.get({ plain: true }));
//     console.log(blogs)

//     res.render('dash', {
//       blogs,
//       loggedIn: req.session.logged_in
//     })

//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

// //post new blog
// router.post("/dash/newblog", async (req, res) => {
//   const user_id = req.session.user_id
//   try {
//       const newBlog = await Blog.create({
//           title: req.body.title,
//           content: req.body.content,
//           user_id: user_id
//       });
//       res.status(200).json(newBlog);
//   } catch (err) {
//       res.status(400).json(err);
//   }
// })

// //render new blog page
// router.get("/dash/newblog", withAuth, async (req, res) => {
//   if (!req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('newblog');
// })


module.exports = router;
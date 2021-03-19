const router = require('express').Router();
const { Blog } = require('../models');

// router.get('/', async (req, res) => {
//     res.render('homepage');
//   });

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({})
        console.log(blogData)
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {
            blogs,
        });
    } catch (err) {
        res.status(500).json(err)
    }
}) 

module.exports = router;
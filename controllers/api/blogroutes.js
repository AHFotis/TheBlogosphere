const router = require('express').Router();
const { User, Blog, Comments } = require('../../models')

router.get("/:id", async (req, res) => {
    try {
        const blogData = await Blog.findOne({
            where: {
                id: req.params.id,
            },
            attributes: ["id", "content", "title", "createdAt"],
            include: [
            { model: User, attributes: ["name"] },
            { model: Comments, attributes: ["id", "text", "user_id", "blog_id"],
                include: {
                    model: User, attributes: ['name'],
                }
            }]
        })
        
        console.log("TEST" + blogData)
        if (!blogData) {
            res.status(404).json({
                message: "No post found with this id"
            });
            return;
        }

        const blog = blogData.get({ plain: true });
        console.log(blog)

        res.render('singlePost', {
            blog,
            loggedIn: req.session.logged_in
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;
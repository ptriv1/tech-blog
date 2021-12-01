const router = require("express").Router();

router.get('/', (req, res) => {
    res.render("home");
})

const blogsMap = blogs.map((blog) => {
    return {
        ...blog,
        isAuthor: blog.user.userId === userId,
    };
});
res.render("home", {blogs: blogsMap})

module.exports = router
const {Router} = require("express");

const {
    createBlog,
    updateBlogById,
    deleteBlogById,
} = require("../../../api/blogs")

const router = Router();

router.post("/", createBlog);
router.post("/:id", updateBlogById);
router.post("/:id", deleteBlogById);


module.exports = router;
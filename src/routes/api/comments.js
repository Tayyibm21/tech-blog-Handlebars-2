const {Router} = require("express");

const  {createComment} = require("../../../api/comments")


const router = Router();

router.post("/", createComment);

module.exports = router;
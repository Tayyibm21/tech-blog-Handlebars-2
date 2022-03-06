const {Router} = require("express");

const {login, signup, logout } = require("../../controllers/api/auth");




const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);


module.exports = router;

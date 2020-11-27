const express = require("express");
const router = express.Router();
const Login = require("./login/index");

router.get("/", (req, res) => {
  res.json({
    code: 200,
    message: "欢迎进入3030",
  });
});

router.get("/user", Login.getUser);

module.exports = router;

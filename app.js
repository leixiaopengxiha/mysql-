const express = require("express");
const path = require("path");
const router = require("./router/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("./public")));
app.use(router);

app.listen(3030, () => {
  console.log("http://localhost:3030");
});

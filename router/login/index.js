const mysql = require("../../module/mysql");

exports.getUser = (req, res) => {
  mysql.open("8.131.83.251", "root", "123456", "nationalScience");
  let sql = "SELECT * FROM `user`";
  mysql.handleData(
    sql,
    null,
    (result) => {
      console.log(result);
      res.json({
        code: 200,
        data: result,
      });
    },
    (err) => {
      console.log(err);
    }
  );
  mysql.close();
};

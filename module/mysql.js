// mysql封装成模块，输出
// 1、open
// 2、增
// 3、删
// 4、改
// 5、查
// 6、关闭
let mysql = require("mysql");
let connection = null;

// mysql打开
// localhost root 12345678 book
exports.open = (host, user, password, database, errcallback, success) => {
  connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
  });
  connection.connect((err) => {
    err
      ? typeof errcallback === "function" && errcallback.call(null, err)
      : typeof success === "function" && success.call();
  });
};

// mysql 增删改查，四个操作
exports.handleData = (sql, data, success, errcallback) => {
  if (!connection) {
    return console.log("mysql还没有连接上，请先连上mysql");
  }
  // 3个参数
  connection.query(sql, data, (err, result, fields) => {
    err
      ? typeof errcallback === "function" && errcallback.call(null, err)
      : typeof success === "function" && success.call(null, result);
  });
};

// mysql关闭
exports.close = () => {
  if (!connection) {
    connection.end();
    connection = null;
    console.log("mysql关闭连接");
  }
};

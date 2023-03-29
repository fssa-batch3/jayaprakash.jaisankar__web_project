const mysql = require("mysql");

// MySQL connection config
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Sachin@31072005",
  database: "data",
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

module.exports = connection;

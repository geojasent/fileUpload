const Pool = require("pg").Pool;

const pool = new Pool({
  user: "jasonwong",
  password: "",
  host: "localhost",
  port: "5432",
  database: "imageupload",
});

module.exports = pool;

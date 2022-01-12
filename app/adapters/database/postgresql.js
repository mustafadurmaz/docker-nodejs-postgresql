const {Pool} = require("pg");

const pool = new Pool({
  user: "patika",
  password: "lizaliza",
  database: "patika_nodejs_bootcamp",
  host: "192.168.128.3",
  
});

try {
  pool.connect();
  console.log("::> PostgreSQL Server is Ready");
} catch (err) {
  console.log(err.stack);
}

module.exports = pool;

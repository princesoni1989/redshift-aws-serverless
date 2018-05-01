const Redshift = require('node-redshift');

var client = {
  user: process.env.user || "user_name",
  database: process.env.database || "database_name",
  password: process.env.password || "password",
  port: process.env.port || 5439,
  host: process.env.host || "host_url",
};

function query(statement, options = []) {
  const redshiftClient = new Redshift(client);
  return new Promise((resolve, reject) => {
    redshiftClient.query(statement, options, function (error, data) {
      if (error) reject(error);
      else {
        redshiftClient.close();
        resolve(data);
      }
    })
  });
}
module.exports = query;

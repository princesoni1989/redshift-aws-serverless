const Redshift = require('node-redshift');

var client = {
  user: process.env.user || "prince",
  database: process.env.database || "princeredshift",
  password: process.env.password || "Prince123",
  port: process.env.port || 5439,
  host: process.env.host || "prince-redshift.c3gh0ryxgww2.us-east-1.redshift.amazonaws.com",
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

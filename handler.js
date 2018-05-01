const redshift = require("./utils/redshift");

module.exports.listInformation = function (event, context, callback) {
  redshift("SELECT * FROM information_schema.tables")
    .then(result => callback(null, sendSuccess(result)))
    .catch(error => callback(null, sendError(403, err.message)))
}

const sendSuccess = (data) => ({
  statusCode: 200,
  body: JSON.stringify(data)
})

const sendError = (statusCode, message) => ({
  statusCode: statusCode || 500,
  headers: {'Content-Type': 'text/plain'},
  body: message,
});

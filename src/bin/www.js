#!/usr/bin/env node

/**
 * Module dependencies.
 */ var app = require("../main");
var debug = require("debug")("nuvi-api:server");
var http = require("http");
const db = require("../sequelize/models");
const sequelize = db.sequelize;
const env = process.env.NODE_ENV;

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
/**
 *  기존에 foreingKey 문제발생 혹은 database sync 용으로 사용했던 코드
 *  development 모드로 실행하면 무조건 table drop 해버리므로 위험해서 사용하지 않음.
 */

// let query = "SET FOREIGN_KEY_CHECKS = 1",
const syncOptions = {};
// if (env === "development") {
//   query = "SET FOREIGN_KEY_CHECKS = 0";
//   syncOptions = { force: true };
// }

// sequelize.query(query).then(() => {
sequelize.sync(syncOptions).then(() => {
  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);
  if (!process.env.PORT) console.log(`listening on localhost:${port}`);
});
// });

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

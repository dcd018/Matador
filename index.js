var config = require('./config');

if (!!process.env.PORT)
  config.port = process.env.PORT;

if (!!process.env.REDIS_HOST) 
  config.redis.host = process.env.REDIS_HOST;

if (!!process.env.REDIS_PORT) 
  config.redis.port = process.env.REDIS_PORT;

var app = require('./app')(config);

app.listen(config.port, function() {
  console.log("Matador listening on port", config.port, "in", process.env.NODE_ENV, "mode");
});
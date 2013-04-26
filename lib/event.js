var queryString = require('querystring')
  , request = require('request')

module.exports.getEvents = function(server, parameters, callback) {

  
}

module.exports.getEvent = function(server, parameters, callback) {
  var id = +(parameters)
  if (isNaN(id)) callback('Please provide event ID', null)
  server.path += '/event/' + id + '/'
  var parameters = { api_key: server.apiKey }
  server.path += '?' + queryString.stringify(parameters)
  server.uri = (server.port == 80) ? 'http://' : 'https://'
  server.uri += server.host + server.path
  request.get(server, function(error, response, body) {
    callback(error, body)
  })
}

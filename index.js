var events     = require('./lib/event')
  , venues     = require('./lib/venue')
  , categories = require('./lib/category')
  , dateParse  = require('./lib/utils/dateParse')
  , extend     = require('extend')

var Planvine = function(parameters) {
  if (!parameters.apiKey || (0 == parameters.apiKey.length))
    throw new Error("No API key provided")

  this.parameters = {
    version: 1,
    host: 'planvine.com',
    path: '/api/v1',
    port: 80
  }
  this.parameters = extend(false, this.parameters, parameters)
}

Planvine.prototype.getEvent = function(id, callback) {
  events.getEvent(this.parameters, id, callback)
}

Planvine.prototype.venue    = venues
Planvine.prototype.category = categories

module.exports = Planvine

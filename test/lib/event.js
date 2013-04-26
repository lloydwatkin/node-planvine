var expect = require('expect.js')
  , mocha  = require('mocha')
  , Planvine = require('../../index')

var planvine = new Planvine(process.env('PLANVINE_API_KEY'))

describe('Events', function() {

  it('Can get a single event', function() {
    expect(function() {
        planvine.getEvent(100, function(error, callback
    })
  })


})

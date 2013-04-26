var  expect = require('expect.js')
  ,  mocha = require('mocha')

var Planvine = require('../index.js')

describe('Basics', function() {

  it ('Throws exception if no API key provided', function() {
    expect(function() { 
      var p = new Planvine()
    }).to.throwError("No API key provided")
  })

  it ('Throws exception if empty API key provided', function() {
    expect(function() {
      var planvine = new Planvine('')
    }).to.throwError('No API key provided')
  })

})

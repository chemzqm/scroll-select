/*global describe, it, beforeEach, afterEach*/
var assert = require('assert')
var expect = require('expect')
var scaffold = require('..')

var el
beforeEach(function () {
  el = document.createElement('div')
  document.body.appendChild(el)
})

afterEach(function () {
  document.body.removeChild(el)
})

describe('works', function() {
  it('should works', function () {
    assert(/can/.test(document.body.textContent))
  })

  it('should not works', function () {
    assert(/cani/.test(document.body.textContent))
  })

  it('should not works two', function () {
    scaffold.test()
  })
})

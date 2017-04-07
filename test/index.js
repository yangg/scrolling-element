/* eslint-env mocha, browser */
/* global chai */
var assert = chai.assert
var INIT_TOP = 99
before(function () {
  document.body.style.height = '999em'
  window.scrollTo(0, INIT_TOP)
})

describe('scrollingElement', function () {
  it('should not be null', function () {
    assert.notEqual(document.scrollingElement, undefined)
  })

  it('should get the setup value', function () {
    assert.equal(document.scrollingElement.scrollTop, INIT_TOP)
  })
})

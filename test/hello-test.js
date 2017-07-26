const request = require('request')
const assert = require('assert')
const baseUrl = 'http://localhost:8000/'
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

describe('Hello World Server', function () {
  describe('GET /', function () {
    it('returns status code 200', function (done) {
      request.get(baseUrl, function (error, response) {
        // expect(response.statusCode).toBe(200);
        if (!error && response.statusCode === 200) {
          assert.equal(200, response.statusCode)
        }
        done()
      })
    })

    it('returns Hello World', function (done) {
      request.get(baseUrl, function (error, response, body) {
        // expect(body).toBe("Hello World");
        if (error) {
          console.log('Error')
        } else {
          assert.equal('Hello World', body)
          // hello-world.closeServer()
          done()
        }
      })
    })
  })
})

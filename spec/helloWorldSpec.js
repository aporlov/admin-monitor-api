var request = require("request");
var hello_url = "http://localhost:3000/helloworld"

describe("Hello World Server", () => {
  describe("GET /helloworld", () => {
    it("returns status code 200", (done) => {
      request.get(hello_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello World", (done) => {
      request.get(hello_url, function(error, response, body) {
        expect(body).toBe("Hello World");
        done();
      });
    });
  });
});
var request = require("request");
var urldp = "http://localhost:3000/dp"

describe("Test dp routing", () => {
  describe("GET /dp",  () => {
    it("returns status code 200", (done) => {
      request.get(urldp, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
   }); 
  describe("POST /dp",  () => {
    it("returns status code 200", (done) => {
      request.post({url:urldp, form: {name:'TestDP'}} , (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
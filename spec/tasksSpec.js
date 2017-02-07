var request = require("request");
var urltasks = "http://localhost:3000/tasks"

describe("Test dp routing", () => {
  describe("GET /tasks",  () => {
    it("returns status code 200", (done) => {
      request.get(urltasks, (error, response, body) => {
          console.log(error);
        expect(response.statusCode).toBe(200);
        done();
      });
    });
   }); 
});
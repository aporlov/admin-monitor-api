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
    describe("POST /tasks",  () => {
    it("returns status code 200", (done) => {
      request.post({url:urltasks, form: {name:'TestTask'}} , (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
   describe("DELETE /tasks",  () => {
    it("returns status code 200", (done) => {
      
      request.delete({url:urltasks, form: {name:'TestTask'}} , (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });  
   describe("DELETE /tasks",  () => {
    it("returns status code 404", (done) => {
      request.delete({url:urltasks, form: {name:'UnknownTask'}} , (error, response, body) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
    });  
});
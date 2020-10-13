const request = require("supertest");
const app = require("../index");
const { TestScheduler } = require("jest");

describe('/', () => {
    // test for '/' route does not exist in api test project,
    // may be because no actions exist on it or it's hard to test?
     
    test("GET" + '/', () => {
        // const response = request(app).get('/');
        const response = request(app).get('/');
        console.log(response);
        expect(response.statusCode).toBe(200);
    });
});
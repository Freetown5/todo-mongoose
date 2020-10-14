const request = require("supertest");
const app = require("../index");

describe('/', () => {

    test("GET" + '/', async () => {
        const response = await request(app).get('/');
        console.log(response.statusCode);
        expect(response.statusCode).toBe(200);
    });
});
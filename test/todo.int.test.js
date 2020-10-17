const request = require("supertest");
const app = require("../index");
const task = require("../test/mocks/task.json");

describe('/', () => {
    test('/', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it("GET" + '/', async () => {
        const response = await request(app)
            .get('/');
        console.log(response);
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy;
    })

    it("POST" + '/', async () => {
        const response = await request(app)
            .post('/')
            .send(task);
        expect(response.statusCode).toBe(302);
        expect(response.request._data.date).toBe(task.date);
        expect(response.request._data.content).toBe(task.content);
        // No body in the response, need to find the id elsewhere
        // newTodoId = response.body._id;
    });
});
const request = require("supertest");
const app = require("../index");
const task = require("../test/mocks/task.json");

describe('/', () => {
    test('/', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it("POST" + '/', async () => {
        const response = await request(app)
        .post('/')
        .send(task);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(newTodo.title);
        expect(response.body.done).toBe(newTodo.done);
        newTodoId = response.body._id;
    });
});
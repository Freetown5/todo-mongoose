const request = require("supertest");
const app = require("../index");
const task = require("../test/mocks/task.json");
const getTask = require("../test/mocks/get-task.json");

describe('/', () => {
    test('/', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it("GET" + '/', async () => {
        const response = await request(app)
            .get('/');
        //Can't find actual data anywhere in the response body besides under "text"
        //Game plan: Make the test push data to the DB, then write an
        //expect clause checking the text to see if it's there
        app.post(getTask);
        expect(response.text).toContain(getTask.content);

        //Future plan: figure out how to get the app to send test data
        //to one collection and real data to another
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
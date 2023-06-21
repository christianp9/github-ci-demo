const request = require('supertest');
const app = require('../core/infrastructure/controller/hello-world');
describe('GET /', () => {
    it('responde con Hola Mundo!', done => {
        request(app)
            .get('/')
            .expect('Hello world!', done);
    });
});

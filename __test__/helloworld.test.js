const request = require('supertest');
const app = require('../core/infrastructure/controller/suma');
describe('GET /', () => {
    it('responde con el resultado de a + b es =5', done => {
        request(app)
            .get('/suma')
            .expect('el resultado de a + b es =5', done);
    });
});

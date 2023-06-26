const request = require('supertest');
const operacionesService = require('../operation-service');
describe('GET /', () => {
    it('responde con el resultado de la division de a / b es = 5', done => {
        request(operacionesService)
            .get('/division')
            .expect('la division de a / b es = 5', done);
        done()
    });
});

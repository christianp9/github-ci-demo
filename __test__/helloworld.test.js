const request = require('supertest');
const operacionesService = require('../operation-service');
describe('GET /', () => {

    it('responde con el resultado de a + b es = 5', done => {
        request(operacionesService)
            .get('/suma')
            .expect('la suma de a + b es = 5', done);
        done()
    });
    it('responde con el resultado de la resta de a - b es = 1', done => {
        request(operacionesService)
            .get('/resta')
            .expect('la resta de a - b es = 1', done);
        done()
    });
    it('responde con el resultado de la division de a / b es = 5', done => {
        request(operacionesService)
            .get('/division')
            .expect('la division de a / b es = 5', done);
        done()
    });
});

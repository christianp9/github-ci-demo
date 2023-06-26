const request = require('supertest');
const operacionesService = require('../operation-service');
describe('GET /', () => {

    it('responde con el resultado de a + b es = 5', done => {
        request(operacionesService)
            .get('/suma')
            .expect('la suma de a + b es = 5', done);
    });
});

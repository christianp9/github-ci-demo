const request = require('supertest');
const operacionesService = require('../operation-service');
describe('GET /', () => {

    it('responde con el resultado de la resta de a - b es = 1', done => {
        request(operacionesService)
            .get('/resta')
            .expect('la resta de a - b es = 1', done);
        done()
    });
});



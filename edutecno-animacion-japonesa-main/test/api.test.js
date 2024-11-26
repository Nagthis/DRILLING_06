import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp);
chai.should();

describe('Testing API', () => {
    it('GET /api/v1/animes should return all animes', (done) => {
        chai.request(app)
            .get('/api/v1/animes')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });

    it('POST /api/v1/animes should add a new anime', (done) => {
        const newAnime = {
            nombre: 'One Piece',
            genero: 'Shonen',
            año: '1999',
            autor: 'Eiichiro Oda'
        };

        chai.request(app)
            .post('/api/v1/animes')
            .send(newAnime)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });

    it('PUT /api/v1/animes/:id should update an existing anime', (done) => {
        const updatedAnime = {
            nombre: 'One Piece 2',
            genero: 'Shonen',
            año: '1999',
            autor: 'Eiichiro Oda'
        };

        chai.request(app)
            .put('/api/v1/animes/6')
            .send(updatedAnime)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });

    it('DELETE /api/v1/animes/:id should delete an existing anime', (done) => {
        chai.request(app)
            .delete('/api/v1/animes/6')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                done();
            });
    });
});
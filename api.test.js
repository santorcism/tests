const supertest = require('supertest');
const api = supertest('https://gorest.co.in/public/v2');
const assert = require('assert'); // Ця бібліотека потрібна для перевірки

describe('API Tests', () => {
    it('should create a new user with a POST request', (done) => {
        api.post('/users')
        .set('Authorization', 'Bearer dde969f59d371b259a83ff83b2d7c32ca1498ad6da085c0109225296a40799aa')
          .send({
            id: 628311,
            name: 'John Doe5',
            email: 'johndoe@example.com',
            gender: 'male',
            status: 'inactive',
          })
          .expect(201) // Очікуємо HTTP-код 201 (створено)
          .end((err, res) => {
            if (err) return done(err);
            const user = res.body.data;
            if (user && user.hasOwnProperty('name')) {
                console.log('New user name:', user.name);
            } else {
                console.log('User name is undefined or does not exist in the response.');
            }
            done();
          });
      });
    

  it('should get user details with a GET request', (done) => {
    api.get('/users/628311')
    .set('Authorization', 'Bearer dde969f59d371b259a83ff83b2d7c32ca1498ad6da085c0109225296a40799aa')
      .expect(200) // Очікуємо HTTP-код 200 (успіх)
      .end((err, res) => {
        if (err) return done(err);
        const user = res.body.data;
        console.log('User details:', user);
        done();
      });
  });

  it('should update user details with a PUT request', (done) => {
    api.put('/users/628311')
    .set('Authorization', 'Bearer dde969f59d371b259a83ff83b2d7c32ca1498ad6da085c0109225296a40799aa')
      .send({
        name: 'Updated Name',
        email: 'updated@example.com',
        gender: 'female',
      })
      .expect(200) // Очікуємо HTTP-код 200 (успіх)
      .end((err, res) => {
        if (err) return done(err);
        const user = res.body.data;
        if (user && user.hasOwnProperty('name')) {
            console.log('Updated user name:', user.name);
        } else {
            console.log('User name is undefined or does not exist in the response.');
        }
        done();
      });
  });

  it('should delete a user with a DELETE request', (done) => {
    api.delete('/users/628311')
    .set('Authorization', 'Bearer dde969f59d371b259a83ff83b2d7c32ca1498ad6da085c0109225296a40799aa')
      .expect(204) // Очікуємо HTTP-код 204 (без вмісту)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});

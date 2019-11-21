const pool = require('../db');
const Model = require('./Model');

class User extends Model {
  constructor () {
    super('users');
    this.id = `SERIAL PRIMARY KEY`;
    this.name = `VARCHAR(128) NOT NULL`;
    this.email = `VARCHAR(128) UNIQUE NOT NULL`;
    this.phone = `VARCHAR(64) UNIQUE NOT NULL`;
  }

  addCars(userId, carsId, cb){
    const textQuery = `UPDATE cars SET user_id = ${userId} 
        WHERE (${carsId.map(i => `id = ${i}`).join(' AND user_id IS NULL ) OR (' )} AND user_id IS NULL)`;
    return pool.query(textQuery,cb)
  }

  getCars (id, cb) {
    const textQuery = `SELECT * from cars where user_id = ${id}`;
    return pool.query(textQuery, cb);
  }

  getUsersWithoutCar(cb) {
    const textQuery = `SELECT u.* from users u LEFT JOIN cars c ON u.id = c.user_id WHERE c.id IS NULL`;
    return pool.query(textQuery, cb);
  }

}

new User().createSchema();
module.exports = new User();

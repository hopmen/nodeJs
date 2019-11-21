const pool = require('../db');
const Model = require('./Model');
console.log(Model);

class Car extends Model {
  constructor () {
    super('cars');
    this.id = `SERIAL PRIMARY KEY`;
    this.car_make = `VARCHAR(128) NOT NULL`;
    this.car_model = `VARCHAR(64)  NOT NULL`;
    this.date = `DATE NOT NULL`;
    this.user_id = `INT REFERENCES users (id)`;
  }

  getCarsOfMakeWithoutUser (make, cb) {
    const textQuery = `SELECT * from cars WHERE LOWER(car_make) = '${make}' and user_id IS NULL`;
    console.log(textQuery);
    return pool.query(textQuery, cb);
  }

  addUser (userId, carsId, cb) {
    const textQuery = `UPDATE cars SET user_id = ${userId} 
        WHERE id = ${carsId} AND user_id IS NULL`;
    console.log(textQuery);
    return pool.query(textQuery, cb)
  }

}

new Car().createSchema();
module.exports = new Car();

const Car = require('../models/Car');

module.exports = class CarController {
  constructor () {

  }

  add (req, res) {
    Car.add(req.body, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(201);
    });
  }

  delete (req, res) {
    Car.delete(req.params.id, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(200);
    });
  }

  update (req, res) {
    Car.update(req.params.id, req.body, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(200);
    });
  }

  get (req, res) {
    Car.get(req.params.id, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      if (result.rows.length === 0) {
        res.sendStatus(404);
      }
      res.send(result.rows[0]);
    });
  }

  getCarsOfMakeWithoutUser (req, res) {
    Car.getCarsOfMakeWithoutUser (req.params.make.toLowerCase(), (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      if (result.rows.length === 0) {
        res.sendStatus(404);
        return;
      }
      res.send(result.rows);
    });
  }

  addUser (req, res) {
    Car.addUser(req.body.user_id, req.params.id, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(200);
    });
  }

};

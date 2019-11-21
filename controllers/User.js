const User = require('../models/User');

module.exports = class UserController {
  constructor () {

  }

  add (req, res) {
    User.add(req.body, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(201);
    });
  }

  delete (req, res) {
    User.delete(req.body.userId, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(200);
    });
  }

  update (req, res) {
    User.update(req.body, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(200);
    });
  }

  get (req, res) {
    User.get(req.params.id, (err, result) => {
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

  getAll (req, res) {
    User.getAll((err, result) => {
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

  getCars (req, res) {
    User.getCars(req.params.id, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      if (result.rows.length === 0) {
        res.sendStatus(404);
      }
      res.send(result.rows);
    });
  }

  getUsersWithoutCars (req, res) {
    User.getUsersWithoutCar((err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      if (result.rows.length === 0) {
        res.sendStatus(404);
      }
      res.send(result.rows);
    });
  }

  addCars (req, res) {
    User.addCars(req.params.id, req.body, (err, result) => {
      if (err) {
        res.sendStatus(500);
        return console.error('Error executing query', err.stack);
      }
      res.sendStatus(200);
    });
  }
};

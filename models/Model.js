const pool = require('../db');

module.exports = class Model {
  constructor (nameDb) {
    this._nameDb = nameDb;
  }

  createSchema () {

    const textQuery = `CREATE TABLE IF NOT EXISTS ${this._nameDb} (
    ${Object
      .keys(this)
      .filter(i => i[0] !== '_')
      .map(i => `${i} ${this[i]}`)
      .join(', ')
    });`;
    pool.query(textQuery,
      [],
      (err) => {
        if (err) {
          return console.error('Error executing query', err.stack);
        }
      })
  }

  add (row, cb) {
    const textQuery = `
        INSERT INTO ${this._nameDb} (${Object.keys(row).join(',')})
        VALUES (${Object.keys(row).map(i => `'${row[i]}'`).join(', ')});
    `;

    pool.query(textQuery, cb);
  }

  delete (id, cb) {
    const textQuery = `DELETE FROM ${this._nameDb} WHERE id=${id}`;

    pool.query(textQuery, cb);
  }

  update (id, row, cb) {
    const textQuery = `UPDATE ${this._nameDb} SET ${
      Object.keys(row)
        .map(i => `${i} = '${row[i]}'`)
        .join(',')} WHERE id = ${id};`;
    pool.query(textQuery, cb);
  }

  get (id, cb) {
    const textQuery = `SELECT * from ${this._nameDb} WHERE id=${id}`;
    return pool.query(textQuery, cb);
  }

  getAll (cb) {
    const textQuery = `SELECT * from ${this._nameDb}`;
    return pool.query(textQuery, cb);
  }
};



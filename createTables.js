const pool = require('./db');


const createTable = (tableName, rows) => {
  return pool.connect()
    .then(() => pool.query(`CREATE TABLE ${tableName} (${Object.keys(rows).map(i => `${i} ${rows[i]}`).join(',')});`))
    .then(() => console.log(`Таблица '${tableName}' создана`));
};

createTable(`users`, {
  id: `SERIAL PRIMARY KEY`,
  name: `VARCHAR(128) NOT NULL`,
  email: `VARCHAR(128) UNIQUE NOT NULL`,
  phone: `VARCHAR(64) UNIQUE NOT NULL`,
})
  .then(createTable(`cars`, {
    id: `SERIAL PRIMARY KEY`,
    car_make: `VARCHAR(128) NOT NULL`,
    car_model: `VARCHAR(64)  NOT NULL`,
    date: `DATE         NOT NULL`,
    user_id: `INT`,
  }))
  .catch(e => console.error(e.stack))
  .finally(process.exit);



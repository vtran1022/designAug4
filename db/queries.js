const pool = require('./connection.js');

const fetchDogs = () => {
  const queryStr = 'SELECT * FROM dogs';
  return pool.query(queryStr).then((data) => data.rows);
};

const addDog = (name, breed) => {
  const queryStr = 'INSERT INTO dogs (name, breed) VALUES ($1, $2)';
  return pool.query(queryStr, [name, breed]).then((response) => response);
};

module.exports = {
  fetchDogs,
  addDog
};

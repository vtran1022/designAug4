const pool = require('./connection.js');

const fetchDogs = () => {
  const queryStr = `SELECT dog.name, breed.breed
                    FROM (SELECT name, breed_id FROM dogs) AS dog
                    JOIN (SELECT breed, breed_id FROM breeds) AS breed
                    ON dog.breed_id = breed.breed_id`;
  return pool.query(queryStr).then((data) => data.rows);
};

const fetchADog = (name) => {
  const queryStr = `SELECT dog.name, breed.breed
                    FROM (SELECT name, breed_id FROM dogs) AS dog
                    JOIN (SELECT breed, breed_id FROM breeds) AS breed
                    ON dog.breed_id = breed.breed_id
                    WHERE dog.name = $1`;
  return pool.query(queryStr, [name]).then((data) => {
    if (data.rows.length === 0) {
      return `Dog with the name ${name} does not exist`;
    }
    return data.rows;
  });
};

const addDog = (name, breed) => {
  const queryStr = 'INSERT INTO dogs (name, breed) VALUES ($1, $2)';
  return pool.query(queryStr, [name, breed]).then((response) => response);
};

module.exports = {
  fetchDogs,
  fetchADog,
  addDog
};

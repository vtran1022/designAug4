const { fetchDogs, fetchADog, addDog, fetchBreeds } = require('../db/queries.js');

const getDogs = (req, res) => {
  fetchDogs()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(`Error fetching dogs: ${err}`);
      console.error(`Error fetching dogs: ${err}\n\n${err.stack}`);
    });
};

const getADog = (req, res) => {
  fetchADog(req.params.name)
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(`Error fetching dog: ${err}`);
      console.error(`Error fetching dog: ${err}\n\n${err.stack}`);
    });
};

const postDog = (req, res) => {
  addDog(req.body.name, req.body.breed_id)
    .then((response) => res.status(200).send(`Successfully added dog! System message:${response}`))
    .catch((err) => {
      res.status(500).send(`Error adding dog: ${err}`);
      console.error(`Error adding dog: ${err}\n\n${err.stack}`);
    });
};

const getBreeds = (req, res) => {
  fetchBreeds()
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      res.status(500).send(`Error fetching breeds: ${err}`);
      console.error(`Error fetching breeds: ${err}\n\n${err.stack}`);
    });
};

module.exports = {
  getDogs,
  getADog,
  postDog,
  getBreeds
};

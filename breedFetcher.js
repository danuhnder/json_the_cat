const request = require('request');

const fetchBreedDescription = function(breedName, callBack) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, status, body) => {
    if (error) {
      callBack(error, null);
    } else {
      const data = JSON.parse(body);
      callBack(null, data);
    }
  });
};

module.exports = { fetchBreedDescription };
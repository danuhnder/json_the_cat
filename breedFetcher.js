const request = require('request');

const fetchBreedDescription = function(breedName, callBack) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (err, status, body) => {
    const data = JSON.parse(body);
    if (err || data.length === 0) {
      callBack(err, null);
    } else {
      callBack(null, data[0]["description"]);
    }
  });
};



module.exports = { fetchBreedDescription };
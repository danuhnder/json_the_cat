const request = require('request');

const cat = process.argv[2];

const catSearch = function(cat) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + cat;
  request(url, (err, status, body) => {
    if (err) {
      console.log(`${err}, ${status}`);
    } else {
      if (body.length < 4) {
        console.log('No matching cats were found!');
      } else {
        const data = JSON.parse(body);
        console.log(data[0]);
      }
    }
  });
};

catSearch(cat);
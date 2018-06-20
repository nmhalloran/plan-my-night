const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const yelp = require('yelp-fusion');
import { searchTerms } from './javascripts/index.js';

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'nj9gtrtoipgrvF10fzilsiVM84C5OFh6014Ftf6wEEY-qJcq5fRz8KwF5tqCVdytL4WS7bf_WMciNhM-jERiJnuP10S5bEI6HVgD3FAU3CYJW8rv_vozbrZew4smW3Yx';

const searchRequest = {
  term:'restaurants',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);
searchTerms();
let businessData;
client.search(searchRequest).then(response => {
  businessData = [];
  const firstResult = response.jsonBody.businesses;
  // const prettyJson = JSON.stringify(firstResult, null, 4);
  // console.log(response);
  response.jsonBody.businesses.forEach(business => {
    let newbusiness = {"name": business.name, "url": business.url, "review_count": business.review_count, "rating": business.rating }
    businessData.push(newbusiness);
  })
  console.log(businessData);
  return response;
}).catch(e => {
  console.log(e);
});

function businessData() => {
  return businessData;
}

debugger

app.use(express.static('public'))

app.get('/', (request, res) => {
  res.render(path.join(__dirname, './public/index.html'))
})

app.get('/', function(req, res) {
  debugger
  console.log("FORM SUBMITTED")
})

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
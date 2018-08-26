const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
const yelp = require("yelp-fusion");

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey =
  "nj9gtrtoipgrvF10fzilsiVM84C5OFh6014Ftf6wEEY-qJcq5fRz8KwF5tqCVdytL4WS7bf_WMciNhM-jERiJnuP10S5bEI6HVgD3FAU3CYJW8rv_vozbrZew4smW3Yx";

app.get("/yelp", function(req, res) {
  const client = yelp.client(apiKey);
  let data;

  client
    .search(req.query)
    .then(response => {
      data = [];
      const firstResult = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(firstResult);
      response.jsonBody.businesses.forEach(business => {
        let newbusiness = {
          name: business.name,
          url: business.url,
          review_count: business.review_count,
          rating: business.rating,
          address: business.location
        };
        data.push(newbusiness);
      });
      console.log("Start Data!", data, "End Data!");
      res.send(data);
      response;
    })
    .catch(e => {
      console.log(e);
    });
});

app.use(express.static("public"));

app.get("/", (request, res) => {
  res.render(path.join(__dirname, "./public/index.html"));
});

app.get("/", function(req, res) {
  
  console.log("FORM SUBMITTED");
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});

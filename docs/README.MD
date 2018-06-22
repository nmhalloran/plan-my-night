PlanMyNight - Data visualization

Background and Overview
PlanMyNight is a data visualization program that will give a brief visual representation of a users Yelp search.

businesses are represented by circles. Their size and color are dependent upon how many reviews a business has and their star rating.

Users generate each screen by entering in their location and basic search parameters.

<!-- Additionally, users are able to define: -->

<!-- secondary search parameters to further streamline a search.
Upon clicking on a business, other local business options will show up. -->

Functionality & MVP
In PlanMyNight, users will be able to:

 Enter in a variety of search parameters
 Unter location by city name, zip code, or address.
 Enter in sub-searches by clicking on an object.
 Reset the search bar

In addition, this project will include:

An About link describing the basic functionality
Wireframes

This app will consist of a single screen with the simulation canvas, location search, and YELP API display, with links to the corresponding YELP pages.

On the left, there will be a location bar, a business category search bar, and reset button.

[wireframes](https://github.com/nmhalloran/plan-my-night/blob/master/PlanMyNight.png)

Architecture and Technologies
This project will be implemented with the following technologies:

Vanilla JavaScript for overall structure.
HTML5 Canvas with D3 for board rendering
Express.js for the YELP API requests.
Webpack to bundle and serve up the various scripts.

api_util.js: this script will handle the the API calls and create data objects

board.js: this script will house all rendering logic for the main screen

json_parser.js: this script will handle all the parsing and manipulation of data objects from API call

search.js: this script will handle all search functionality.

Implementation Timeline
Over the weekend:

Finished GraphQL tutorial.
Researched basic D3 implementation.
Began manipulating YELP API.

Day 1: Setup all necessary modules. Get rendering skeleton (board and search area) up and running.
Goals:
 have index.html rendering basic shapes based on input data.
 Receive and be able to manipulate data from YELP's API.
Day 2: Dedicate this day to working on transferring YELP's API data into the D3 rendering logic. Work on basic collision physics.
Goals:
  Have individual circles rendering properly in the canvas.
  Streamline and issues with search parameters.
Day 3: This day will be set aside for improving the rendering of the project.
Goals:
  Have all circles rendering properly with correct collision detection.
  stub out the formatting for all necessary outside links.
Day 4: Get final versions of all formatting for backend data manipulation
Goals:
   necessary GraphQL object types. Confirm query format.
   finalize api-util.js, search.js, and json.parser.js
   Have a styled Canvas, nice looking controls and title

Bonus features
Full evening planning:
  option to create a timeline of businesses based upon start time, location, and method of transportation.

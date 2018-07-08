# Plan My Night

Plan my night is a data visualization app that allows you to quickly see the results of a Yelp search in an intuitive and streamlined way. The user experience is straight forward: the user enters in a search just like they would in Yelp, Plan my night returns a series of circles representing the search, with radii being calculated based on the numbers of reviews, and the colors representing star ratings.

Simple instructions are included in a sidebar.

# Technologies and API

Plan my night was developed using Vanilla JavaScript, Node.js, and Express. Canvas and D3 are the rendering tools.

The data was retrieved using Yelp's proprietary Yelp Fusion API module. This required creating a lightweight backend in Express.js to handle the calls, and creating some middleware to send data back and forth between the server and the browser. This was necessary to avoid any CORS issues.

The API call was custom formatted upon retrieval, so only the necessary data was sent up to the browser for manipulation and rendering.

# Screen Shots

[Starting Screen](./docs/Initial_Screen_Shot.png)<br/>
[Search Initial Screen](./docs/Search_Screen_Shot.png)<br/>
[Individual Restaurant Screen](./docs/Final_Screen_Shot.png)

Enjoy using Plan My Night. Any feedback can be sent directly to nmhalloran@gmail.com!

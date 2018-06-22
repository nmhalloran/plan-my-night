const axios = require('axios');


var newSearch = {};
var result;

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('submit', e => {
    const searchForm = document.getElementById('searchform')
    newSearch = searchInput(searchForm);
    e.preventDefault();
    $.ajax({
      url: "/yelp",
      type: "get",
      success: function (response) {
        console.log("You got it!")
        return response;
      }
    })
    console.log(newSearch, 'newSearch');
    window.response = $.ajax({
      url: "/yelp",
      type: "get",
      data: newSearch,
      success: function (response) {
        result = response;
        $("#article-prev-title").html("<span>How to Use Plan My Night</span>")
        $("#article-prev-text").html("<div>Enter your location and then make a standard Yelp search. Click on the circles representing the businesses returned in your search! <br><br>NB: Enter in a new search to clear and reset the screen.</div>")
        /////////////////////////////////////////
        /////////////////////////////////////////
          var width = window.innerWidth,
              height = window.innerHeight;
          let maxradius = 0;
          d3.range(result.length).forEach(function(idx) {
            if (result[idx].review_count > maxradius) {
              maxradius = result[idx].review_count;
            }
          })
          var scaledRadius = d3.scale.linear()
            .domain([0, maxradius])
            .range([25, 160]);

          // var drag = d3.behavior.drag()
          //   .origin(function(d) { return d; })
          //   .on("dragstart", dragstarted)
          //   .on("drag", dragged)
          //   .on("dragend", dragended);

          var scaledColor = d3.scale.linear()
            .domain([2.5, 3.5, 4.5])
            .range(["red", "yellow", "green"])
          var nodes = d3.range(result.length).map(function(idx) {
            return {
              radius: scaledRadius(result[idx].review_count),
              color: scaledColor(result[idx].rating),
              name: result[idx].name,
              url: result[idx].url,
              address: result[idx].address,
              rating: result[idx].rating,
              review_count: result[idx].review_count
               };
          }),
              root = nodes[0],
              color = d3.scale.category10();

          root.radius = scaledRadius(result[0].review_count);
          root.fixed = true;

          var force = d3.layout.force()
              .gravity(0.06)
              .charge(function(d, i) { return i ? 300 : -2000; })
              .nodes(nodes)
              .size([width, height]);

          force.start();

          d3.select("svg").remove();

          var svg = d3.select("div.mainwrapper").append("svg")
              .attr("width", width)
              .attr("height", height)

          var circles = svg.selectAll("circle")
              .data(nodes.slice(1))

          var g = circles.enter().append('g');

              g.append("circle")
              .attr("r", function(d) { return d.radius; })
              .attr("stroke", "black")
              .style("fill", function(d, i) {
                return d.color;
              })
              .on("click", function(d){
                 $("#article-prev-title").html("")
                 $("#article-prev-text").html("")
                  let businessName = d.name
                  let businessRating = d.rating;
                  let businessReviews = d.review_count;
                  let businessCity = `${d.address.city}, ${d.address.state} ${d.address.zip_code}`;
                  let businessAddress = d.address.address1;

                 let url = d.url

                 console.log(url)

                 let iframeRender = document.createElement("iframe")
                 iframeRender.src = url;
                 iframeRender.height = 480;
                 iframeRender.width = 1080;
                 iframeRender.frameborder = 0;
                 iframeRender.scrolling = "no";
                 iframeRender.allowfullscreen = "yes";
                 $("#article-prev-title").append(`<span>${businessName}</span>`);
                 $("#article-prev-text").append(`<div>${businessAddress}</div>`);
                 $("#article-prev-text").append(`<div>${businessCity}</div>`);
                 $("#article-prev-text").append(`<div>Rating: ${businessRating}</div>`);
                 $("#article-prev-text").append(`<div>Reviews ${businessReviews}</div>`)
                 $("#article-prev-text").append(`<div><a class="sidebar-link" href= ${url}>Visit Yelp Site</a></div>`)
               });


          var textElements = svg.append('g')
              .selectAll('text')
              .data(nodes.slice(1))
              .enter().append("text")
              .style("fill", "black")
              .text(function(d){
                return d.name
              })
              .attr("x", function(d) {return d.x;})
              .attr("y", function(d) {return d.y;});

          force.on("tick", function(e) {
            var q = d3.geom.quadtree(nodes),
                i = 0,
                n = nodes.length;

            while (++i < n) q.visit(collide(nodes[i]));

            svg.selectAll("circle")
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });

            textElements
              .attr('x', function(d) { return d.x; })
              .attr('y', function(d) { return d.y; });
            console.log('tick')
          });

          // svg.on("mousemove", function() {
          //   var p1 = d3.svg.mouse(this);
          //   root.px = p1[0];
          //   root.py = p1[1];
          //   force.resume();
          // });

          // function dragstarted(d) {
          //   d3.event.sourceEvent.stopPropagation();
          //   d3.select(this).classed("dragging", true);
          // }
          //
          // function dragged(d) {
          //   d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
          // }
          //
          // function dragended(d) {
          //   d3.select(this).classed("dragging", false);
          // }


          function collide(node) {
            var r = node.radius + 16,
                nx1 = node.x - r,
                nx2 = node.x + r,
                ny1 = node.y - r,
                ny2 = node.y + r;
            return function(quad, x1, y1, x2, y2) {
              if (quad.point && (quad.point !== node)) {
                var x = node.x - quad.point.x,
                    y = node.y - quad.point.y,
                    l = Math.sqrt(x * x + y * y),
                    r = node.radius + quad.point.radius;
                if (l < r) {
                  l = (l - r) / l * .5;
                  node.x -= x *= l;
                  node.y -= y *= l;
                  quad.point.x += x;
                  quad.point.y += y;
                }
              }
              return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            };
          }

        return response;
      },
      error: function() {
        console.log("Error");
      }
    })
  })

  console.log(window.response);
  function searchInput(form) {
      return {
        location: form[0].value,
        term: form[1].value
      }
  }


})

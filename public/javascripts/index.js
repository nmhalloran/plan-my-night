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
        /////////////////////////////////////////
        /////////////////////////////////////////
        let canvas = document.getElementById('network');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let ctx = canvas.getContext('2d');

        var mouse = {
          x: undefined,
          y: undefined
        }

        let maxRadius = 60;
        let minRadius = 10;

        var colorArray = [
          'rgba(255, 0, 0, 0.9)',
          '#ffaa33',
          '#00ff00',
          '#4411aa',
          '#ff1100'
        ]
        console.log(result, " in the canvas!")
        window.addEventListener('mousemove',
        function(event) {
          mouse.x = event.x;
          mouse.y = event.y;
          // console.log(mouse);
        })

        window.addEventListener('resize',
        function(){
          canvas.width = window.innerWidth - 100;
          canvas.height = window.innerHeight;
        })

        function Circle(x, y, dx, dy, radius, color) {
          this.x = x;
          this.y = y;
          this.dx = dx;
          this.dy = dy;
          this.radius = radius;
          this.minRadius = radius;
          this.color = color;

          this.draw = function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.strokeStyle = 'blue';
            ctx.fillStyle = this.color;
            ctx.stroke();
            ctx.fill();
          }

          this.update = function() {
            if (this.x + this.radius > innerWidth - 100 || this.x - this.radius < 0) {
              this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
              this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            // interactivity

            // if (mouse.x - this.x < 70 && mouse.x - this.x > -70 && mouse.y  - this.y < 70 && mouse.y - this.y > -70) {
            //   if (this.radius < maxRadius) {
            //     this.radius += 1;
            //   }
            // } else if (this.radius > minRadius) {
            //   this.radius -= 1;
            // }
            this.draw();
          }

        }
        let circleArray = [];
        function init() {
          for (var i = 0; i < result.length; i++) {
            let radius = result[i].review_count;
            let color = colorArray[Math.floor(Math.random() * colorArray.length)]
            let x = Math.random() * (innerWidth - radius * 2) + radius;
            let y = Math.random() * (innerHeight - radius * 2) + radius;
            let dy = (Math.random() - 0.5) * 3;
            let dx = (Math.random() - 0.5) * 3;
            circleArray.push(new Circle(x, y, dx, dy, radius, color));
          }
        }

        init();

        function animate() {
          requestAnimationFrame(animate);
          ctx.clearRect(0, 0, innerWidth, innerHeight);
          for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
          }
        }
        animate();
        /////////////////////////////////////////
        /////////////////////////////////////////
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

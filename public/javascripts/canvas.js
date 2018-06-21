

// let canvas = document.getElementById('network');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let ctx = canvas.getContext('2d');
//
// var mouse = {
//   x: undefined,
//   y: undefined
// }
//
// let maxRadius = 60;
// let minRadius = 10;
//
// var colorArray = [
//   '#fff',
//   '#ffaa33',
//   '#00ff00',
//   '#4411aa',
//   '#ff1100'
// ]
//
// window.addEventListener('mousemove',
//   function(event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     // console.log(mouse);
// })
//
// window.addEventListener('resize',
//   function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//   })
//
// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = radius;
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
//
//   this.draw = function() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue';
//     ctx.fillStyle = this.color;
//     ctx.stroke();
//     ctx.fill();
//   }
//
//   this.update = function() {
//     if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//
//     this.x += this.dx;
//     this.y += this.dy;
//
//     // interactivity
//
//     if (mouse.x - this.x < 70 && mouse.x - this.x > -70 && mouse.y  - this.y < 70 && mouse.y - this.y > -70) {
//       if (this.radius < maxRadius) {
//         this.radius += 1;
//       }
//     } else if (this.radius > minRadius) {
//       this.radius -= 1;
//     }
//     this.draw();
//   }
//
// }
// let circleArray = [];
// function init() {
//   for (var i = 0; i < 250; i++) {
//     let radius = Math.random() * 30 + 1;
//     let x = Math.random() * (innerWidth - radius * 2) + radius;
//     let y = Math.random() * (innerHeight - radius * 2) + radius;
//     let dy = (Math.random() - 0.5) * 3;
//     let dx = (Math.random() - 0.5) * 3;
//     circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// }
//
// init();
//
// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }
// animate();
// // document.addEventListener("DOMContentLoaded", animate());
//
//
// // Arc/ Circle
//
// // for (let i = 0; i <  50; i++) {
// //   let x = Math.random() * window.innerWidth;
// //   let y = Math.random() * window.innerHeight;
// //   let c1 = Math.floor(Math.random() * 255);
// //   let c2 = Math.floor(Math.random() * 255);
// //   let c3 = Math.floor(Math.random() * 255);
// //   console.log(c1, c2, c3);
// //   ctx.beginPath();
// //   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
// //   ctx.strokeStyle = `rgba(${c1}, ${c2}, ${c3}, 1.0)`;
// //   ctx.stroke();
// // }

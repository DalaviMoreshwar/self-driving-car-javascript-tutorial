const canvas = document.getElementById("simulationCanvas");
canvas.width = 300;

// draw the car on the canvas, by having driving context
const ctx = canvas.getContext("2d");

const road = new Road(canvas.width/2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(3), 100, 30, 50);

animate();

function animate(){
  car.update();

  canvas.height = window.innerHeight;

  road.draw(ctx);
  car.draw(ctx);
  requestAnimationFrame(animate);
}
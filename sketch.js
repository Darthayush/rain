var raindrops = [];

function setup() {
  createCanvas(1500,800);
  for (var i = 0; i < 800; i++){
    raindrops[i] = new Drop();
  }
}

function draw() {
  background("black");
  for (var i = 0; i < 500; i++) {
    raindrops[i].fall();
    raindrops[i].display();
  }
}

  

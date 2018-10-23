var mySong;
var volume;
var volhistory = [];
var hhh = 150;
var x = 0;

function preload() {
  mySong = loadSound('./assets/Busy_Beat.mp3')
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  mySong.play();

  background(0)


  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

}

function draw() {

  background(0, 0, 0, 5)

  volume = analyzer.getLevel();
  volhistory.push(volume);
  noFill();
  stroke(255);
  beginShape();
  for (var i = 0; i < volhistory.length; i+= 5) {

    x = i;
    var y = map(volhistory[i]/2, 0, 1, hhh, 0);
    vertex(x, y);
  }

  if(volhistory.length > width) {
    volhistory = [];
    hhh += 150;
  }
  endShape();

  noStroke();
  fill(volume+50, volume+50, volume+50, 20)
  ellipse (width/2, height/2, y*3)
}

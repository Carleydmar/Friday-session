var canvasSize = 400;

function setup() {
    var canvas = createCanvas(canvasSize, canvasSize);
    canvas.parent("p5container");
}

function draw() {

    var eyeX = map(mouseX, 0, 400, 125, 175);
    var eyeY = map(mouseY, 0, 400, 125, 155);
    //console.log(mouseX, mouseY);

    background(220);

    stroke(100); //Stroke color or fill
    strokeWeight(5); //Stroke thickness

    //face
    fill(255, 255, 0);
    ellipse(width  / 2, height / 2, 300);

    //eyes
    fill(255);
    ellipse(eyeX, eyeY, 45, 60);
    ellipse(eyeX + 100, eyeY, 45, 60);

    //blush
    fill(255, 215, 0);
    noStroke();
    ellipse(110, 220, 45, 45);
    ellipse(290, 220, 45, 45);

    //smile
    stroke(100); //Stroke color or fill
    strokeWeight(5); //Stroke thickness

    noFill();
    arc(200, 220, 180, 180, radians(30), radians(150));

}
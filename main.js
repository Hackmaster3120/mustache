rightX=0;
rightY=0;
function preload() {
    beard=loadImage("beard.png");
}
function setup() {
    canvas=createCanvas(500,380);
    canvas.position(100,180);
    webcam=createCapture(VIDEO);
    webcam.hide();
    poseyboi=ml5.poseNet(webcam,modelLoaded);
    poseyboi.on('pose',displayResults);
}
function draw() {
    image(webcam,0,0,500,380);
    image(beard,rightX,rightY,150,50);
}
function modelLoaded() {
    console.log("dots on your face have been loaded");
}
function displayResults(results) {
    if (results.length>0) {
        console.log("results have been loaded");
        console.log(results);
        rightX=results[0].pose.nose.x-150;
        rightY=results[0].pose.nose.y-65;
    }
}
function TakeThePic() {
    save("YouTheCoolBoi.png");
}

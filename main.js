noseX=0;
noseY=0; 
mustacheX=0;
mustacheY=0;
function preload(){
    clownnose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture("VIDEO");
    video.size(400, 400);
    video.hide();
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', fetcher);
}
function modelLoaded() {
    console.log("Model is working");
}
function fetcher(results){
    if (results.length>0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        mustacheX= results[0].pose.nose.x;
        mustacheY= results[0].pose.nose.y;
        console.log(noseX,noseY);
    }

}
function draw() {
    image(video, 0, 0, 400, 400);
    image(clownnose,noseX-10,noseY-10,20,20);
    image(mustache,mustacheX-10,mustacheY,20,20);
   
}
function takesnapshot(){
    save("Best App's Image.png");
}

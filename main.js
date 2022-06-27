function setup(){
    video=createCapture(VIDEO);
    video.size(350, 350);
    video.position(300, 200);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    background('lightblue');
}
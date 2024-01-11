function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    video.position(10,10);
    canvas=createCanvas(550,550);
    canvas.position(600,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}


function modelLoaded(){
    console.log("Posenet Is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
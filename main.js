song_1 = "";
song_2 = "";

leftWristX = 0;
leftWristY= 0;

rightWristX = 0;
rightWristY= 0;

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 500);
    song_2.play();
}

function modelLoaded(){
    console.log("Posenet has been initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("Left wrist x = "+leftWristX+" ,Left wrist Y = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("Right wrist x = "+rightWristX+" ,Right wrist Y = "+rightWristY);
    }
}

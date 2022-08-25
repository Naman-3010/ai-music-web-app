song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;
songName=0;



function preload(){



    song=loadSound("");

}

function setup() { 
    canvas = createCanvas(600, 500); 
    canvas.center(); 
    video = createCapture(VIDEO); 
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotposes);
}

function modelLoaded(){
    console.log("posenet is initialized");

}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist= results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist "+scoreLeftWrist+", scoreRightWrist "+scoreRightWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("left wrist X= "+leftWristX+" left Wrist Y= "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right Wrist X= "+rightWristX+" right Wrist Y= "+rightWristY);
    }

    

}

    


function draw() { 
    
    image(video, 0, 0, 600, 500);
    fill("#0000FF");
    stroke("#FF0000");
}

   
    
    function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause(){
    song.pause();
    
}
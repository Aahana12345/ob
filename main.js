img="";
status="";
Objects=[];

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:detecting Objects";
}

function preload(){
    img=loadImage('bed.jpg');
}

function draw(){
  
image(img,0,0,640,420);
if (status !=  ""){
    for( i = 0; i < Objects.length;i++){
        document.getElementById("status").innerHTML="objectDetected";
        fill("red");
        percent=floor(Objects[i].confidence * 100);
        text(Objects[i].label+ " " +percent + "%",Objects[i].x +15,Objects[i].y +15);
        noFill();
        stroke("red");
     rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
    }

}
image(img,0,0,640,420);
fill("red");
text("Bed" ,45,75);
noFill();
stroke("red");
rect(30,60,450,350);

}

function modelLoaded(){
    console.log(modelLoaded);
    status=true;
   objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
Objects=results;
}
























































































































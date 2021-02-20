var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
var car_height=90;
var car_width=100;
var background="https://i.postimg.cc/KzWwHPcq/racing.gif";
var car="https://i.postimg.cc/YqdnnNX1/car1.png";
var car_x=10;
var car_y=10;
function upload(){
    var backgroundimage=new Image();
    backgroundimage.onload=uploadbcg;
    backgroundimage.src=background;
    var car2=new Image();
    car2.onload=uploadrov;
   car2.src=rover;
}
function uploadbcg(){
    context.drawImage(backgroundimage,0,0,canvas.width,canvas.height);
}
function uploadrov(){
    context.drawImage(car2,car_x,car_y,car_width,car_height);
}
window.addEventListener("keydown",efony);
function efony(e){
    var key=e.keyCode;
    if(key=='38'){
        up();
    }
    if(key=='38'){
        down();
    }
    if(key=='38'){
        right();
    }
    if(key=='38'){
        left();
    }
}
var marsRoverGameCanvas=document.querySelector('canvas');
var marsRoverGameCanvasCTX2D=marsRoverGameCanvas.getContext('2d');
var marsRoverImgSrcStr='images/mars_rover.png';
var marsSurfaceImgSrcStr='images/mars_surface.jpg';
var marsRoverWidthAndHeightNumObj={width: 100, height: 90};
var marsRoverXAndYNumObj={x: 10, y: 10};
var marsSurfaceImg=null;
var marsRoverImg=null;
var possibleMarsSurfaceImgSrcs=['images/mars_surface_1.jpg', 'images/mars_surface_2.jpg', 'images/mars_surface_3.jpg'];

Math.getRandomNum=function(minNum, maxNum){
    return Math.floor(Math.random()*(maxNum-minNum)+minNum);
}

function uploadMarsSurfaceImg(){
    marsRoverGameCanvasCTX2D.drawImage(marsSurfaceImg, 0, 0, marsRoverGameCanvas.width, marsRoverGameCanvas.height);
}

function uploadMarsRoverImg(){
    marsRoverGameCanvasCTX2D.drawImage(marsRoverImg, marsRoverXAndYNumObj.x, marsRoverXAndYNumObj.y, marsRoverWidthAndHeightNumObj.width, marsRoverWidthAndHeightNumObj.height);
}

function setUpMarsRoverGame(){
    marsSurfaceImg=new Image(1000, 566);
    marsSurfaceImg.onload=uploadMarsSurfaceImg;
    marsSurfaceImg.src=possibleMarsSurfaceImgSrcs[Math.getRandomNum(0, 2)];
    marsRoverImg=new Image(marsRoverWidthAndHeightNumObj.width, marsRoverWidthAndHeightNumObj.height);
    marsRoverImg.onload=uploadMarsRoverImg();
    marsRoverImg.src='images/mars_rover.png';
}

function moveMarsRoverImg(dirStr){
    i=false;

    if(dirStr=='up'&&marsRoverXAndYNumObj.y>0){
        marsRoverXAndYNumObj.y=marsRoverXAndYNumObj.y-10;
        i=true;
    }else if(dirStr=='down'&&marsRoverXAndYNumObj.y<510){ 
        marsRoverXAndYNumObj.y=marsRoverXAndYNumObj.y+10;
        i=true;
    }else if(dirStr=='left'&&marsRoverXAndYNumObj.x>0){
        marsRoverXAndYNumObj.x=marsRoverXAndYNumObj.x-10;
        i=true;
    }else if(dirStr=='right'&&marsRoverXAndYNumObj.x<700){
        marsRoverXAndYNumObj.x=marsRoverXAndYNumObj.x+10;
        i=true;
    }else{
        throw "Invaild input in 'moveMarsRoverImg'! Inputs must be 'up', 'down', 'left', or 'right'!";
    }

    if(i){
        marsRoverGameCanvasCTX2D.clearRect(0, 0, marsRoverGameCanvas.width, marsRoverGameCanvas.height);
        uploadMarsSurfaceImg();
        uploadMarsRoverImg();
    }
}

addEventListener('keydown', eventVar=>{
    if(eventVar.key=='ArrowUp'){
        moveMarsRoverImg('up');
        console.log('up');
    }else if(eventVar.key=='ArrowDown'){
        moveMarsRoverImg('down');
        console.log('down');
    }else if(eventVar.key=='ArrowLeft'){
        moveMarsRoverImg('left');
        console.log('left');
    }else if(eventVar.key=='ArrowRight'){
        moveMarsRoverImg('right');
        console.log('right');
    }
});



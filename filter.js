
var image = null;
var gimage = null;
var rimage = null;
var blurimg = null;
var canvas;

function loadImage(){
  var fileinput  = document.getElementById("i1");
  image = new SimpleImage(fileinput);
  gimage = new SimpleImage(fileinput);
  rimage = new SimpleImage(fileinput);
  blurimg = new SimpleImage(fileinput);


  canvas = document.getElementById("can");
  image.drawTo(canvas);
}

function doGrey() {

  if (gimage == null || !gimage.complete()) {
        alert("image not loaded");
  }

  for (var pixel of gimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //canvas = document.getElementById("can");
  gimage.drawTo(canvas);
  var fileinput  = document.getElementById("i1");
  gimage = new SimpleImage(fileinput);
}

function doRed() {

  if (rimage == null || !rimage.complete()) {
        alert("image not loaded");
  }

  for (var pixel of rimage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    if (avg < 128){
    pixel.setRed(2*avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
    }
    else{
    pixel.setRed(255);
    pixel.setGreen(2*avg-255);
    pixel.setBlue(2*avg-255);
    }
  }
  //canvas = document.getElementById("can");
  rimage.drawTo(canvas);
  var fileinput  = document.getElementById("i1");
  rimage = new SimpleImage(fileinput);
}

function doBlur(){

  if (blurimg == null || !blurimg.complete()) {
        alert("image not loaded");
  }

  var pxdist = 10 ;
  for (var pixel of blurimg.values()){
    var random = Math.random();
    if (random < 0.5){

    }
    else{
      var nearX = pixel.getX()+Math.round(Math.random()*pxdist*2)-pxdist ;
      var nearY = pixel.getY()+Math.round(Math.random()*pxdist*2)-pxdist ;

    if (nearX < 0){
      nearX = 0;
    }

    if (nearY < 0){
      nearY = 0;
    }

    if (nearX > blurimg.getWidth()-1) {
      nearX = blurimg.getWidth()-1;
    }
    if (nearY > blurimg.getHeight()-1) {
      nearY = blurimg.getHeight()-1;
    }
    blurimg.setPixel(pixel.getX(),pixel.getY(),image.getPixel(nearX,nearY));

    }
  }
 blurimg.drawTo(canvas);
  var fileinput  = document.getElementById("i1");
  blurimg = new SimpleImage(fileinput);
}

function reset(){

  if (image == null || !image.complete()) {
        alert("image not loaded");

  }

  //canvas = document.getElementById("can");
  image.drawTo(canvas);
  var fileinput  = document.getElementById("i1");
  gimage = new SimpleImage(fileinput);
  rimage = new SimpleImage(fileinput);
}

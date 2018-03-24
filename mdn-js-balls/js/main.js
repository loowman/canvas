// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
let ball=[],
    count=25,
    num=0;
// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}
shape=new Shape(
  random(0,width),
  random(0,height),
  random(10,20)
);
function drawEvil(shape){
  
  ctx.beginPath();
  ctx.lineWidth=3;
  ctx.strokeStyle='white';
  ctx.arc(shape.x,shape.y,shape.size,0,Math.PI*2,false);
  ctx.stroke()
  ctx.closePath();
}
function  drawFont(){
  ctx.font="20px Georgia";
  ctx.fillStyle='white';
  ctx.fillText('The ball num is:'+count,width-300,20);
}
setInterval(function(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  drawEvil(shape);
  while(num<25){
     ball.push(
      new Ball(
        random(0,width),
        random(0,height),
        random(1,7),
        random(1,7),
        random(10,20),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')'
        

      )
     );
     num++;
    }
   for(let i=0;i<ball.length;i++){
       let x=ball[i].x-shape.x;
       let y=ball[i].y-shape.y;
       let distance=Math.sqrt(x*x+y*y);
       if(distance<=ball[i].size+shape.size){
         ball.splice(i,1);
         count--;
        }
   }
   for(let i=0;i<ball.length;i++){
     ball[i].draw();
     ball[i].update();
     ball[i].collision(ball);
    }
 
    drawFont();
},10)
function change(e){
  if (e.keyCode === 37) {
    shape.x-=20;
  } else if (e.keyCode === 39) {
   shape.x+=20;
  } else if (e.keyCode === 38) {
   shape.y-=10;
  } else if (e.keyCode === 40) {
   shape.y+=10;
  }
}
window.addEventListener('keyup',change);

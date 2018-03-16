const c=document.getElementById("canvas");
const cc=c.getContext("2d");
const width=c.width;
const height=c.height;
const rate=Math.PI/10;
let arr=[],
    C=[110,180,230];

function draw(x,y,color){
     cc.fillStyle=color;
     cc.fillRect(x,y,1,1);
}

function getC(){
   for(let i=0;i<3;i++){
       if(C[i]>255){
           C[i]=110;
       }else{
           C[i]+=20;
       }
   }
   return C;
}

// function add(event){
//     getC();
//    arr.push({
//        r:1,
//       x:event.clientX,
//       y:event.clientY,
//       color:'rgb('+C[0]+','+C[1]+','+C[2]+')'

//    });
// }
function add(){
    getC();
       arr.push({
           r:1,
          x:Math.random()*width,
          y:Math.random()*height,
          color:'rgb('+C[0]+','+C[1]+','+C[2]+')'
    
       });
}
function update(x,y,r,color){
   for(let i=0;i<=20;i++){
      x_1=r*Math.cos(i*rate);
      y_1=r*Math.sin(i*rate);
      draw(x+x_1,y+y_1,color);
   }
}

// window.addEventListener('click',add);
// window.addEventListener('mousemove',add);

setInterval(function(){
     cc.fillStyle="#000";
     cc.fillRect(0,0,width,height);
     add();
     for(let i=0;i<arr.length;i++){
           update(arr[i].x,arr[i].y,arr[i].r,arr[i].color);

            if(arr[i].r++>50){
                   arr.splice(i,1);
            }
     }

},50)
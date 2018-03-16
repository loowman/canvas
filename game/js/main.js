
const  c=document.getElementById("canvas");
const cc=c.getContext('2d');
const width=c.width;
const height=c.height;
const k=c.width;
const l=c.height;
const h=100;
const radius=10;
var N=B=50;
var T=count=currentEvils=0;
var starList = [];
var evils=[];  
var ray=[];
draw = function(C, X, Y, S, A)
{
	cc.fillStyle = C;
	cc.fillRect(X ,Y, S, A?A:S);
}

function init(){
    cc.clearRect(0,0,width,height);

    cc.fillStyle="#000";
    cc.fillRect(0,0,width,height);
   
}

function R(v)
{
	return Math.random() * (v - 45) + 15
}


window.addEventListener("mousemove",function(even){  
        let x=even.clientX-20;
        let y=even.clientY-20;
        if(x<=900||x>=0){
            N=x;
        }
        if(y<=600||y>=0){
            B=y;
        }
        
},0)

window.addEventListener('click',function(even){
        ray.push({
               x:N+40,
               y:B+20,
               w:30,
               h:2
        })


},0);

render=setInterval(function(){
      init()
      i = 0;
     
      cc.font='normal 2em s';
      while(i < 500)
      {
          if (!starList[i]) 
          {
              starList[i] = {
                  s: Math.random() * 3,
                  x: R(k+l),
                  y: R(l)
              }
          }
          
          draw("#fcc", starList[i].x -= starList[i].s * 3, starList[i].y, starList[i].s);
          
          starList[i].x < -h ? starList[i].x = k + Math.random() * h:1;
          i++;
      }

      if(currentEvils<T++/h){
          evils.push({
              x:h*Math.random()+k,
              y:R(l),

             
          })
          currentEvils++;
      }
     for(e in evils){
         p=evils[e];

         if(N+30>p.x&p.x+20>N&p.y+20>B&B+30>p.y){  
                clearInterval(render);
               cc.fillText("Game Over",width/2-100,height/2);
               setTimeout(function(){
                     if(confirm("是否重新玩游戏")){
                               window.location.reload()
               }
               },1000)
             
            
         }
         draw("rgb(187,255,255)",p.x-=15,p.y,20,20);
         if(p.x<-h){
              delete evils[e];
             currentEvils--;
         }
     }
       




      for(let i=0;i<ray.length;i++){
        
            p=ray[i];
  
          draw("#F08080",ray[i].x+=30,ray[i].y,ray[i].w,ray[i].h);
            if(p.x<k+h){
                for(e in evils){
                    P=evils[e];
                    if(p.x+30>P.x&P.x+20>p.x&p.y+2>P.y&P.y+20>p.y){
                       delete evils[e];
                        count++;
                        currentEvils--;
                       
                    }
                }
            }


            }
            
           
            draw("#FCFCFC",N,B,30,30);
            cc.font="#FF0";
            cc.fillText(count,20,40)


            

},30);





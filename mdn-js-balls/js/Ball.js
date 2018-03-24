function Ball(x,y,speed_x,speed_y,size,color){
    this.x=x;
    this.y=y;
    this.speed_x=speed_x;
    this.speed_y=speed_y;
    this.size=size;
    this.color=color;
    // console.log(this.x)
}

Ball.prototype.draw=function(){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ctx.fill()
}

Ball.prototype.update=function(){
    if((this.x+this.size)>=width||(this.x-this.size)<=0){
        this.speed_x=-this.speed_x;
    }else if((this.y+this.size)>=height||(this.y-this.size)<=0){
        this.speed_y=-this.speed_y;
    }

    this.x+=this.speed_x;
    this.y+=this.speed_y;
}
Ball.prototype.collision=function(ball){
    for(let i=0;i<ball.length;i++){
        if(!(this==ball[i])){
            let x=Math.abs(this.x-ball[i].x);
            let y=Math.abs(this.y-ball[i].y);
            let distance=Math.sqrt(x*x+y*y);
            if(this.size+ball[i].size>=distance){
                ball[i].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
}
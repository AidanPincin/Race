const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
class Racer{
    constructor(color,x,y,name){
        this.x = x
        this.y = y
        this.color = color
        this.time = 60
        this.speed = 0
        this.y2 = y
        this.x2 = x
        this.name = name
        this.time2 = 0
    }
    draw(){
        this.time2 += 1
        if (this.time != 60){this.time += 1}
        else{this.speed = Math.random()*2+3; this.time = 0}
        ctx.fillStyle = '#000000'
        ctx.fillRect(this.x2,this.y2,1000,2)
        ctx.fillRect(this.x2+1000,this.y2,2,602)
        ctx.fillRect(this.x2,this.y2+600,1002,2)
        ctx.fillRect(this.x2,this.y2,2,600)
        ctx.fillStyle = this.color
        ctx.fillRect(this.x-10,this.y-10,20,20)
        if (this.y == this.y2 && this.x<this.x2+1000){
            this.x+=this.speed
            if(this.x>this.x2+1000){this.x=this.x2+1000}
        }
        if (this.x == this.x2+1000 && this.y<this.y2+600){
            this.y+=this.speed
            if(this.y>this.y2+600){this.y=this.y2+600}
        }
        if (this.y == this.y2+600 && this.x > this.x2){
            this.x-=this.speed
            if(this.x<this.x2){this.x=this.x2}
        }
        if (this.x==this.x2 && this.y>this.y2){
            this.y-=this.speed
            if(this.y<this.y2){this.y=this.y2;alert(this.name+" won!\r\nTime: "+(this.time2/60).toFixed(3)+" seconds")}
        }
    }
}
const racers = [new Racer('#ff0000',30,30,'Red'), new Racer('#00ff00',60,60,'Green'), new Racer('#0000ff',90,90,'Blue'), new Racer('#ffff00',120,120,'Yellow')]
function Race(){
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0,0,1200,800)
    for (let i=0; i<racers.length; i++){racers[i].draw()};requestAnimationFrame(Race)
}
Race()
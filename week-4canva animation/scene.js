import { Square } from "./square.js";

function randomValue(min,max){
return min + Math.random()*(max-min);
}

export class Scene{

constructor(canvas,nSquares){

this.canvas = canvas;
this.ctx = canvas.getContext("2d");

this.squares = Array.from({length:nSquares},()=>{

return new Square(
{
x: randomValue(0,canvas.width),
y: randomValue(0,canvas.height)
},

20 + Math.random()*40,

{
x: randomValue(-200,200),
y: randomValue(-200,200),
rotation: randomValue(-3,3)
},

`hsl(${Math.random()*360},80%,60%)`

)

});

}

draw(){

for(const square of this.squares){
square.draw(this.ctx);
}

}

update(elapsed){

for(const square of this.squares){

square.update(elapsed);
square.handleEdge(this.canvas);

}

}

}
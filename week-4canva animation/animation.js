import { Scene } from "./scene.js";

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.append(canvas);

const select = document.getElementById("exercise");
const runBtn = document.getElementById("run");

let animationId;

function clear(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}

/* ------------------------
Exercise 1
Simple square
------------------------ */

function exercise1(){

clear();

let x = canvas.width/2;
let y = canvas.height/2;
let size = 80;

ctx.save();
ctx.translate(x,y);
ctx.fillStyle="white";
ctx.fillRect(-size/2,-size/2,size,size);
ctx.restore();

}

/* ------------------------
Exercise 2
setInterval movement
------------------------ */

function exercise2(){

let x=0;
let y=canvas.height/2;
let size=50;

setInterval(()=>{

clear();

x+=2;
if(x>canvas.width) x=0;

ctx.save();
ctx.translate(x,y);
ctx.fillStyle="red";
ctx.fillRect(-size/2,-size/2,size,size);
ctx.restore();

},10)

}

/* ------------------------
Exercise 3
requestAnimationFrame
------------------------ */

function exercise3(){

let x=0;
let y=canvas.height/2;
let size=50;
let speed=200;

let previous=0;

function frame(timestamp){

const elapsed=(timestamp-previous)/1000;
previous=timestamp;

clear();

x+=speed*elapsed;

if(x>canvas.width) x=0;

ctx.save();
ctx.translate(x,y);
ctx.fillStyle="yellow";
ctx.fillRect(-size/2,-size/2,size,size);
ctx.restore();

animationId=requestAnimationFrame(frame);

}

animationId=requestAnimationFrame(frame);

}

/* ------------------------
Exercise 4,5,6
Scene with squares
------------------------ */

function runScene(){

const scene = new Scene(canvas,100);

let previous=0;

function frame(timestamp){

const elapsed=(timestamp-previous)/1000;
previous=timestamp;

clear();

scene.update(elapsed);
scene.draw();

animationId=requestAnimationFrame(frame);

}

animationId=requestAnimationFrame(frame);

}

runBtn.onclick = () => {

cancelAnimationFrame(animationId);
clear();

const choice = select.value;

if(choice==="1") exercise1();
if(choice==="2") exercise2();
if(choice==="3") exercise3();
if(choice==="4" || choice==="5" || choice==="6") runScene();

};
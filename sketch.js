const Engine=Matter.Engine;   //namespacing
const World= Matter.World;    // const is constant value which never changes
const Bodies=Matter.Bodies;

var  myengine,myworld;
var  ground;
var ball;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  //myworld is myengine's world
  myworld=myengine.world;

  var ground_options= {

    isStatic : true 
    }
  var ball_options= {

    restitution : 1.0

  }



  ground=Bodies.rectangle(200,380,400,20,ground_options);
  World.add(myworld,ground);
  ball=Bodies.circle(200,200,30,ball_options);
  World.add(myworld,ball); 
 
 
 
 /* console.log(ground);
  console.log(ground.type);  //body
  console.log(ground.position.x); //200
  console.log(ground.position.y); //100
  console.log(ground.isStatic); //false*/

  
}

function draw() {
  background(0,0,0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  
}
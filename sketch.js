const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
 engine=Engine.create();
 world=engine.world;

 var ground_option= {
  isStatic:true
}
 ground = Bodies.rectangle(200,200,50,50,ground_option);
 World.add(world,ground);

 var ground_option= {
  restitution:"1.0"
}

 ball = Bodies.circle(200,100,20,ground_option);
 World.add(world,ball);

//rect(object.position.x,object.position.y,50,50,option);
 console.log("Hey Object is printed ", ground)
 console.log(ground.position.x,ground.position.y)
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER)
  
  rect(ground.position.x,ground.position.y,50,50);
  // drawSprites();
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}


//boolean : true or false


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world
var ground
var ch1
var ball
var b1 ,b2, b3, b4,b5
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);




	engine = Engine.create();
	world = engine.world;

	ground=new Box (600,680,1200,20)

	ball=new Ball()

	ch1=new Rope(ball.body,{x:650,y:300})
   b1=new Building(800,640) 
   b2=new Building(800,590) 
   b3=new Building(800,540) 
   b4=new Building(800,490) 
   b5=new Building(800,440) 
}

function draw(){
background("lightblue")
Engine.update (engine)
ground.display()
ball.display()
ch1.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()

}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}









 



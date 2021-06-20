const World = Matter.World
const Bodies = Matter.Bodies
const Engine = Matter.Engine
const Body=Matter.Body

var engine,world;
var ball,ground,wall,wedge;
var angle=60;

function setup() 
{
    createCanvas (400,400);
    engine=Engine.create();
    world=engine.world;
    var ball_options=
    {   
        restitution:1,
        frictionAir:0.01   
    }
    ball=Bodies.circle(100,10,20,ball_options);
    World.add(world,ball);

    var ground_option=
    {     
        isStatic:true   
    }
    ground=Bodies.rectangle(10,310,400,20,ground_option);
    World.add(world,ground);

    wall=Bodies.rectangle(300,150,70,10,ground_option);
    World.add(world,wall);
    
    wedge=Bodies.rectangle(100,200,100,20,ground_option);
    World.add(world,wedge)
}
function draw() 
{
    background("red") ;
    Engine.update(engine);
    ellipse(ball.position.x,ball.position.y,20);
    rect(ground.position.x,ground.position.y,400,20);
    rect(wall.position.x,wall.position.y,300,20);

    Matter.Body.rotate(wedge,angle);
    push();
    translate(wedge.position.x,wedge.position.y)
    rotate(angle);
    angle=angle+0.1;

    rect(0,0,100,20);
    pop();
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world,r1;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/ba1.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    ground1 = new Ground(1050,375,200,10);
    ground2 = new Ground(950,325,10,100);
    ground3 = new Ground(1150,325,10,100);

    ground4 = new Box1(1050,325,290,150);

 // r1 = createSprite(1050,325,10,10)
   

   

    bird = new Bird(250,250);

    rope = new SlingShot(bird.body,{x:250,y:250})

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
 //   console.log(box2.body.position.x);
 
    ground.display();
    bird.display();
    rope.display();
   
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();


  
 

 
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){

    if(keyCode === 32){

       rope.attach(bird.body);

    }
}
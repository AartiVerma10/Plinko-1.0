const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var bg;

var plinkoA=[];
var diviA=[];
var ballA=[];

var h = 600;
var w = 500;
var divisionH = 300;

function preload(){
 bg=loadImage("images/bg.png");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(500,600);
  
  down = new Ground(250,595,500,10);
  up = new Ground(500,950,1000,10);
  left = new Ground(5,300,10,600);
  right = new Ground(495,300,10,600);
  
  ground = new Division(250,580,480,30);

  r2 = new Division(485,440,10,300);

  for(var i=15;i<=w;i=i+80){
    diviA.push(new Division(i,440,10,300));
  }
  for(var j=0;j<=w;j=j+40){
    plinkoA.push(new Plinko(j,50));
  }
  for(var k=20;k<=w;k=k+40){
    plinkoA.push(new Plinko(k,100));
  }
  for(var l=0;l<=w;l=l+40){
    plinkoA.push(new Plinko(l,150));
  }
  for(var m=20;m<=w;m=m+40){
    plinkoA.push(new Plinko(m,200));
  }
  for(var o=0;o<=w;o=o+40){
    plinkoA.push(new Plinko(o,250));
  }

}

function draw() {
  background(bg);
  Engine.update(engine);  

  rectMode(CENTER);
  imageMode(CENTER);

  for(i=0;i<diviA.length;i++){
    diviA[i].display();
  }

  for(j=0;j<plinkoA.length;j++){
    plinkoA[j].display();
  }
  for(k=0;k<plinkoA.length;k++){
    plinkoA[k].display();
  }
  for(l=0;l<plinkoA.length;l++){
    plinkoA[l].display();
  }
  for(m=0;m<plinkoA.length;m++){
    plinkoA[m].display();
  }
  for(o=0;o<plinkoA.length;o++){
    plinkoA[o].display();
  }
      
  down.display();
  right.display();
  left.display();
  up.display();
  r2.display();

  ground.display();



  if(frameCount%60===0){
    ballA.push(new Particles(random(w/2-20,w/2+30),-5,5));
  }

  for(a=0;a<ballA.length;a++){
    ballA[a].display();
  }
}

const Engine=Matter.Engine,Bodies=Matter.Bodies,Body=Matter.Body,World=Matter.World;
var particles=[],plinkos=[],divisions=[];
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var a=0;a<=480;a=a+80){
    divisions.push(new Division(a,800-300/2,10,300));
  }
  for(var b1=40;b1<=480;b1=b1+50){
    plinkos.push(new Plinko(b1,75));
  }
  for(var b2=15;b2<=480-10;b2=b2+50){
    plinkos.push(new Plinko(b2,175));
  }
  for(var b3=40;b3<=480;b3=b3+50){
    plinkos.push(new Plinko(b3,275));
  }
  for(var b4=15;b4<=480-10;b4=b4+50){
    plinkos.push(new Plinko(b4,375));
  }
  ground=new Ground(480/2,800,480,20);
}
function draw() {
  background("lightblue");
  Engine.update(engine);
  if(frameCount%60==0){
     particles.push(new Particle(random((480/2)-10,(480/2)+10),10));
  }
  for(var a1=0;a1<7;a1++){
    divisions[a1].display();
  }
  for(var c=0;c<particles.length;c++){
    particles[c].display();
  }
  for(var b=0;b<plinkos.length;b++){
    plinkos[b].display();
  }
  ground.display();
}
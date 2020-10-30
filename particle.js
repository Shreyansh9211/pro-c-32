class Particle {
    constructor(x,y) {
      this.color=color(random(0,255),random(0,255),random(0,255));
      this.body = Bodies.circle(x,y,10);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, 10);
    }
}
class Ball{
    constructor( ) {
       
        this.body = Bodies.circle(100,100,50);
       
       

        World.add(world, this.body); 
      }
      display(){

        var angle = this.body.angle;
        push();
        
       fill(0)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,50,50)
        
        pop();
      }
}
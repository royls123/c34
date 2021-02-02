class Building{
    constructor(x, y) {
        var options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
       

        World.add(world, this.body); 
      }
      display(){
        var angle = this.body.angle;
        push();
        
       stroke("green")
       fill("red")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
        pop();
      }
}
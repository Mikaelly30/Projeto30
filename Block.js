class Block{
  constructor(x, y, width, height) {
    
    var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
    this.image = loadImage("block.png"); 
    this.Visibility = 255;
    
    World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed < 3){
       push();
        var pos= this.body.position;
        imageMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);  
        image(this.image,this.body.position.x,this.body.position.y, 30,40);
        pop();
      }
      else{
        World.remove(world, this.body);
        tint(255,this.Visibility);
        
      }  
    }
}
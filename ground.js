class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true,
      restitution:0,
      friction:0,
      density:1
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

 display(){
  
   fill(255);
   rect(this.body.position.x, this.body.position.t, this.width, this.height);
 }
  
}
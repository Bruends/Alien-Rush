class Character 
{
  constructor(gravity, fly_force){
    this.x = 20;
    this.y = 250;
    this.width = 52;
    this.height = 43;
    this.gravity = gravity;
    this.fly_force = fly_force;
    this.mousePressed = false;
    this.img = new Image();
    this.img.src = "images/character.png";
  }

  fly(){    
    this.y -= this.fly_force;      
  }  

  fall(){    
    this.y += this.gravity;    
  }

  action(){
    if(this.mousePressed){
      this.fly();
    }else {
      this.fall();  
    }
  }

  draw(context){    
    context.drawImage(this.img, this.x, this.y);
  }
}
class Obstacles 
{
  constructor(){
    this.obstaclesInScreen = [];
    this.spawnTime = 1;    
    this.image = new Image();
    this.image.src = 'images/obstacle.png';
  }

  spawn(context){
    if(this.spawnTime <= 0){
      this.obstaclesInScreen.push({
        x: 600,
        y: randomInt(10,600),
        width: 43,
        height: 43,
        movingSpeed: randomInt(7, 9)
     })
    }
  } 
  
  updateObstaclesInScreen(){
    //adicionando novos obstaculos na tela
    if(this.spawnTime <= 0){
      this.spawn();
      this.spawnTime = 13;
    } else {
      this.spawnTime--;
    }

    //removendo obstaculos que passam a tela
    //e atualizando posição conforme a velocidade    
    for(let i in this.obstaclesInScreen){
      let obstacle = this.obstaclesInScreen[i];
      if(obstacle.x <= -10){
        this.obstaclesInScreen.splice(i, 1);
      } else {
        obstacle.x -= obstacle.movingSpeed; 
      }
    }
  }

  draw(context){
    let img = this.image; 
    for(let obstacle of this.obstaclesInScreen){  
      context.drawImage(img, obstacle.x, obstacle.y);
    }
  }
  
}
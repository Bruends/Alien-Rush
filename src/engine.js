class Engine
{
  constructor(context, character, obstacles){
    // variaveis
    this.context = context;
    this.character = character;
    this.obstacles = obstacles;
    this.score = 0;
    this.hiScore = 0;
    this.fixedBg = new Image();
    this.fixedBg.src = 'images/black.png';
    this.movingBg = new Image();
    this.movingBg.src = 'images/cavernBg.png';
    this.movingBgPos = 0;

    // elementos DOM
    this.menu = document.getElementById('game-menu'); 
    this.scoreSpan = document.getElementById('score');
    this.menuMsg = document.getElementById('msg');
    this.hiScoreSpan = document.getElementById('hi-score');

    //estado do jogo
    this.playing = false;    
  }

  startGame() {
    this.menu.style.display = 'none';
    this.obstacles.obstaclesInScreen = [];
    this.character.y = 250;
    this.score = 0;
    this.playing = true;
  }

  
  gameOver(){
    //game over
    this.playing = false;
    this.menu.style.display = 'block';
    this.menuMsg.textContent = 'Game Over';
    
    // verificando recorde
    if( this.score > this.hiScore ) {  this.hiScore = this.score  }
    
    this.hiScoreSpan.textContent = `Record:  ${this.hiScore}`;

    playGameOverMusic();
    
  }
  
  //controles do personagem e botão jogar
  setControlls(){
    const thischaracter = this.character;
    window.addEventListener('mousedown', function(){
      thischaracter.mousePressed = true;
    });   
    
    window.addEventListener('mouseup', function(){
      thischaracter.mousePressed = false;
    });

    // evento botão play 
    const start = this.startGame;
    const btn = document.getElementById('btn-start');
    btn.addEventListener('click', start.bind(this));
  }
  
  // checa colisão do personagem com os obstaculos ou cenário
  checkCollision(){
    //cenario
    if(this.character.y <= -40 || this.character.y >= 600){
      this.gameOver();
    }

    // obstaculos
    const character = this.character;
    const obstaclesInScreen = this.obstacles.obstaclesInScreen;     
    for(let obstacle of obstaclesInScreen){  
      // checando se o obstaculo alcançou o personagem    
      if(character.x >= obstacle.x) {
        // checando colisão vertical 
        if(character.y >= obstacle.y && character.y <= (obstacle.y + obstacle.height)
          || (character.y + character.height) >= obstacle.y && (character.y + character.height) <= (obstacle.y + obstacle.height)){
          this.gameOver();
        }
      }
    }
  }
  
  //renderização
  draw(){
    // background fixo
    this.context.drawImage(this.fixedBg, 0, 0);

    // background movel
    this.context.drawImage(this.movingBg, this.movingBgPos, 0);
    
    if(this.movingBgPos >= -600){
      this.movingBgPos -= 4;
    } else {
      this.movingBgPos = 0;
    }

    // personagem e obstaculos    
    if(this.playing) {
      this.character.draw(this.context);
      this.obstacles.draw(this.context);
    }
  } 
 
  run(){
    this.draw();

    // jogo rodando
    if(this.playing){
      this.character.action();          
      this.obstacles.updateObstaclesInScreen();
      this.checkCollision();

      // score
      this.scoreSpan.textContent = this.score;
      this.score++;      
    }
  }
}

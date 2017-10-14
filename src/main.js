window.onload = function(){

  const canvas = document.getElementById('game');
  this.context = canvas.getContext('2d');    
  // desenhando background do jogo
  canvas.height = 600;
  canvas.width = 600;

  // variaveis de jogo
  const character  = new Character(6,6.5);
  const obstacles = new Obstacles();
  const engine = new Engine(this.context, character, obstacles);
  engine.setControlls();

  // roda o jogo em loop
  const runGame = function(){       
     window.requestAnimationFrame(runGame);
     engine.run();    
  }
  
  playBackgoudMusic();

  runGame();
}
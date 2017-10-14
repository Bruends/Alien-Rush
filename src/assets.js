//-----funções complementares
const randomInt = (min, max) =>{
  return  Math.floor((Math.random() * max) + min);
}

const playBackgoudMusic = () =>{
  const bgMusic = new Audio('sounds/bgMusic.wav');
  bgMusic.loop = true;
  bgMusic.volume = 0.3;
  bgMusic.play();
}

const playGameOverMusic = () => {
  const goMusic = new Audio('sounds/gameOver.ogg');
  goMusic.loop = false;
  goMusic.volume = 0.4;
  goMusic.play();
}
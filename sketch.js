var space,spaceImg;
var chinimalImg,chinimalsGroup;
var namuna,namunaImg,namunasGroup;
var rocket,rocketImg;
var asteroid,asteroidImg,asteroidsGroup;
var gameState="play";
var asteriodSound,gameOverSound,extremeSound;
var gameOverImg;
function preload(){
  spaceImg=loadImage("back.png")
  chinimalImg=loadImage("chinimal.png")
  namunaImg=loadImage("namuna.png")
  rocketImg=loadImage("rocket.png")
  asteroidImg=loadImage("asteriod.png")
  asteriodSound=loadSound("Laser.mp3")
  gameOverSound=loadSound("Game.mp3")
  extremeSound=loadSound("Extreme .mp3")
  chinimalsGroup=new Group();
  namunasGroup=new Group();
  asteroidsGroup=new Group();
  gameOverImg=loadImage("mission.png");
}

function setup(){
  createCanvas(600,600);  
  space=createSprite(260,300);
  space.addImage(spaceImg);
  space.velocityY=2;
  rocket=createSprite(200,200,5,5);
  rocket.addImage(rocketImg);
  rocket.scale=0.2;
  rocket.debug=true;
  rocket.setCollider("rectangle",0,0,350,380)
}
function draw(){
if (gameState==="play"){  
 // extremeSound.play();
background("white");
//audio.volume = 0.2;

createEdgeSprites();



if(space.y>600){
  space.y=300;
}
if (keyDown("left_arrow")){
    rocket.x=rocket.x-10;
    }  
if(keyDown("right_arrow")){
rocket.x=rocket.x+10  
}
if (keyDown("space")){
  rocket.velocityY=-10;
}
rocket.velocityY=rocket.velocityY+1;

  if(asteroidsGroup.isTouching(rocket)||namunasGroup.isTouching(rocket)||chinimalsGroup.isTouching(rocket)||rocket.y>600){
  rocket.destroy();
  space.velocityY=0
  gameState="End";
  }
 
if(gameState==="End"){
  gameOverSound.play();
  var gameOver=createSprite(200,200,20,20)
  gameOver.addImage(gameOverImg);
} 
  spawnchinimals();
  spawnnamuna();
  spawnasteriod();}
drawSprites();
}

function spawnchinimals(){
  if(frameCount%300===0){
  var chinimal=createSprite(300,200);
  //asteroid.width=namuna.width;
  //asteroid.heigth=2;
  chinimal.velocityY=12;
  chinimal.velocityX=20
  //chinimal.bounceOff(egdes)
  chinimal.x=Math.round(random(120,400));
  //asteroid.visible=false;  
  chinimal.addImage(chinimalImg);
  chinimal.velocityY=2;
  chinimalsGroup.add(chinimal);
  chinimal.lifetime=200;
  chinimal.debug=true
  rocket.depth=chinimal.depth;
  rocket.depth +=1;
  }
  
}
function spawnnamuna(){
if(frameCount%500===0){
    var namuna=createSprite(300,-60);
    namuna.addImage(namunaImg);
    namuna.x=Math.round(random(120,400));
    namuna.velocityY=2;
    namunasGroup.add(namuna);
    namuna.lifetime=400;
    namuna.scale=0.5;
    namuna.setCollider("circle",0,0,120)
}
}
function spawnasteriod(){
  if(frameCount%120===0){
  var asteroid=createSprite(300,-70,50,2);
  asteroid.addImage(asteroidImg)
  asteroidsGroup.add(asteroid);
  asteroid.lifetime=1000;
  asteroid.scale=0.1
  asteroid.velocityY=20
  asteroid.x=Math.round(random(30,400));
  asteriodSound.play();
}}
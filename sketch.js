var monkey, monkey_running;
var banana, bananaImage, bananaGroup, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score = 0,
  ground;
var END = 0,PLAY = 1;
var gameState=PLAY;
var restart,restartImage;
function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  restartImage=loadImage("restart.png");
}



function setup() {
  createCanvas(400, 400);
  monkey = createSprite(50, 260);
  obstacleGroup = new Group();
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.12;
  ground = createSprite(400, 300, 400, 10);
  ground.x = ground.width / 2;
  bananaGroup = new Group();
  restart=createSprite(200,100);
    restart.addImage(restartImage);
  restart.visible=false;
}


function draw() {
  background("white");
  
  if (gameState===PLAY) {
    obstacleGroup.setVelocityXEach(-5);
    bananaGroup.setVelocityXEach(-5);
    if (keyDown("space") && monkey.y > 257) {
      monkey.velocityY = -15;
    }
    text("score:" + score, 350, 370);
    monkey.velocityY = monkey.velocityY + 0.8;

    monkey.debug = true;
    monkey.setCollider("circle", 10, 10, 250)
    spawnobs();
    bananaSpawn();
    obstacleGroup.setVelocityXEach(-5);
    bananaGroup.setVelocityXEach(-5);
    scoree();
    console.log(monkey.y);
  
  }
  if (monkey.isTouching(obstacleGroup)) {
    gameState = END;
  }
  if (gameState===END) 
  
  {
    gameState=END;
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);  
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    restart.visible=true;
    if (mousePressedOver(restart))
    {
      gameState=PLAY;
      bananaGroup.destroyEach();
      obstacleGroup.destroyEach();
      restart.visible=false;
      score=0;
    }  
  }
monkey.collide(ground);

  drawSprites();

}

function spawnobs() {
  //write code here to spawn the clouds
  if (frameCount % 50 === 0) {
    obstacle = createSprite(400, 270);
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    obstacle.scale = 0.15;
    obstacle.debug = true;
    obstacle.setCollider("circle", 0, 0, 200);
    obstacle.lifetime = 210;
  }
}



function bananaSpawn() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400, Math.round(random(120, 200)));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    //banana.velocityX=-5;
    banana.lifetime = 210;
    bananaGroup.add(banana);
  }
}

function scoree() {
  if (monkey.isTouching(bananaGroup)) {
    bananaGroup.destroyEach();
    score = score + 10;
  }
  if (frameCount % 20 === 0) {
    score++;
  }
}
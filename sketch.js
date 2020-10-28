var knife,fruit1,fruit2,fruit3,fruit4,knifeAnim,knifeSound,fruit1Anim,fruit2Anim,fruit3Anim,fruit4Anim,alien1,alien2,alien1Anim,alien2Anim,gameOver,gameOverAnim,gameOverSound,mouseX_cntrl,mouseY_cntrl,PLAY=1,END=0,gameState=PLAY,score,fruit1GRP,fruit2GRP,fruit3GRP,fruit4GRP,alien1GRP,alien2GRP,fruitSpawn,score=0,gameOver;

function preload()
{
  knifeAnim=loadImage("sword.png");
  knifeSound=loadSound("knifeSwooshSound.mp3");
  fruit1Anim=loadImage("fruit1.png");
  fruit2Anim=loadImage("fruit2.png");
  fruit3Anim=loadImage("fruit3.png");
  fruit4Anim=loadImage("fruit4.png");
  alien1Anim=loadImage("alien1.png");
  alien2Anim=loadImage("alien2.png");
  gameOverAnim=loadImage("gameover.png");
  gameOverSound=loadSound("gameover.mp3");
}
function setup()
{
  createCanvas(600,600); 
  knife=createSprite(300,400);
  knife.scale=0.7;
  knife.setCollider("circle",10,-10,40);
  knife.addImage(knifeAnim);
  fruit1GRP=createGroup();
  fruit2GRP=createGroup();
  fruit3GRP=createGroup();
  fruit4GRP=createGroup();
  alien1GRP=createGroup();
  alien2GRP=createGroup();
  gameOver=createSprite(300,300);
}

function draw()
{
  
  background(rgb(224,255,255));
  gameOver.visible=false;
  if (gameState===PLAY)
    {
  mouseX_cntrl=mouseX;
  mouseY_cntrl=mouseY;
  knife.x=World.mouseX;
  knife.y=World.mouseY;
  fruit();
  hit_fruit();
  text("score: "+score,500,550);
    }
  endgame();
  if(gameState===END)
    {
      fruit1GRP.destroyEach();
      fruit2GRP.destroyEach();
      fruit3GRP.destroyEach();
      fruit4GRP.destroyEach();
      alien1GRP.destroyEach();
      alien2GRP.destroyEach();
      knife.destroy();
      gameOver.visible=true;
      gameOver.addImage(gameOverAnim);
      
    }
    
  drawSprites();
}

function fruit()
{
 if (frameCount%30===0)
   {
  fruitSpawn=Math.round(random(1,10));
  switch(fruitSpawn)
    {
     case 1:fruit1_func();
     break;
        
     case 2:fruit2_func();
     break;
      
     case 3:fruit3_func();
     break;
      
     case 4:fruit4_func();
     break;
     
     case 5:fruit1_func();
     break;
        
     case 6:fruit2_func();
     break;
      
     case 7:fruit3_func();
     break;
      
     case 8:fruit4_func();
     break;
     
     case 9:alien1_func();
     break;
        
     case 10:alien2_func();
     break;
      
     
    }
}
}
function fruit1_func()
{
  fruit1=createSprite(Math.round(random(1,600)),0);
  fruit1.addImage(fruit1Anim);
  fruit1GRP.add(fruit1);
  fruit1.scale=0.25;
  fruit1.lifetime=200;
  fruit1.velocityY=10;
  fruit1.velocityY=Math.round(random(5,10));
  fruit1.velocityX=Math.round(random(-5,5));
}

function fruit2_func()
{
  fruit2=createSprite(Math.round(random(1,600)),0);
  fruit2.addImage(fruit2Anim);
  fruit2GRP.add(fruit2);
  fruit2.scale=0.25;
  fruit2.lifetime=200;
  fruit2.velocityY=10;  
  fruit2.velocityY=Math.round(random(5,10));
  fruit2.velocityX=Math.round(random(-5,5));
}

function fruit3_func()
{
  fruit3=createSprite(Math.round(random(1,600)),0);
  fruit3.addImage(fruit3Anim);
  fruit3GRP.add(fruit3);
  fruit3.scale=0.2;
  fruit3.lifetime=200;
  fruit3.velocityY=10;  
  fruit3.velocityY=Math.round(random(5,10));
  fruit3.velocityX=Math.round(random(-5,5));
}

function fruit4_func()
{
  fruit4=createSprite(Math.round(random(1,600)),0);
  fruit4.addImage(fruit4Anim);
  fruit4GRP.add(fruit4);
  fruit4.scale=0.15;
  fruit4.lifetime=200;
  fruit4.velocityY=10;
  fruit4.velocityX=Math.round(random(-5,5));
}

function alien1_func()
{
  alien1=createSprite(Math.round(random(1,600)),0);
  alien1.addImage(alien1Anim);
  alien1GRP.add(alien1);
  alien1.scale=1;
  alien1.lifetime=200;
  alien1.velocityY=10;
  alien1.velocityX=Math.round(random(-5,5));
}

function alien2_func()
{
  alien2=createSprite(Math.round(random(1,600)),0);
  alien2.addImage(alien2Anim);
  alien2GRP.add(alien2);
  alien2.scale=1;
  alien2.lifetime=200;
  alien2.velocityY=10;
  alien2.velocityX=Math.round(random(-5,5));
}

function hit_fruit()
{
  if (knife.isTouching(fruit1GRP))
    {
      fruit1GRP.destroyEach();
      score=score+1;
    }
  if (knife.isTouching(fruit2GRP))
    {
      fruit2GRP.destroyEach();
      score=score+1;
    }
  if (knife.isTouching(fruit3GRP))
    {
      fruit3GRP.destroyEach();
      score=score+1;
    }
  if (knife.isTouching(fruit4GRP))
    {
      fruit4GRP.destroyEach();
      score=score+1;
    }
}

function endgame()
{
  if (knife.isTouching(alien1GRP) || knife.isTouching(alien2GRP))
    {
    gameState=END;
    }
}


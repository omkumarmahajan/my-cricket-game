
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var PLAY = 0
var gameState = PLAY
var run = 0
var wic = 0
var frame1
var frame2

function preload()
{
	ground = loadImage("cric images/ground.png")
  standing = loadImage("cric images/standing 9.png")
  standing2 = loadImage("cric images/left ready.png")
  standing3 = loadImage("cric images/rohit straight ready.png")
  standing4 = loadImage("cric images/right ready.png")
  keeper = loadImage("cric images/keeper.png")
  f1 = loadImage("cric images/fielder1.png")
  f2 = loadImage("cric images/fielder 2.png")
  f3 = loadImage("cric images/fielder 3.png")
  f4 = loadImage("cric images/fielder 4.png")
  f5 =loadImage("cric images/fielder 5.png")
  f6 = loadImage("cric images/fielder 6.png")
  f7 = loadImage("cric images/fielder 7.png")
  bl = loadImage("cric images/bowler.png")
  dive = loadImage("cric images/fielder dive.png")
  ballImg = loadImage("cric images/ball.png")
  stumpImg = loadImage("cric images/stumps.png")
  r4 = loadImage("cric images/4.png")
  r6 = loadImage("cric images/6.png")
  outI = loadImage("cric images/out.png")
  frame1 = loadImage("animation/famee.png",)
  frame2 = loadAnimation("animation/famee_2.png","animation/frame_2.png")
 

}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

  gr = createSprite(windowWidth - 700,350 )
  gr.addImage(ground)
  gr.scale = 3


  kp = createSprite(windowWidth -650,180)
kp.addImage(keeper)
kp.scale = 0.6

stump = createSprite(windowWidth -690,200)
stump.addImage(stumpImg)
stump.scale = 0.3

a6 = createSprite(windowWidth- 650,windowHeight- 450)
a6.addImage(r6)
a6.scale = 0.4
a6.visible  = false


batsman= createSprite(windowWidth -700,230)
batsman.addImage( standing)
batsman.scale = 0.4

batsman2= createSprite(windowWidth -700,230)
batsman2.addImage( standing2)
batsman2.scale = 0.4
batsman2.visible = false

batsman3= createSprite(windowWidth -700,230)
batsman3.addImage( standing3)
batsman3.scale = 0.4
batsman3.visible = false

a4 = createSprite(windowWidth- 650,windowHeight- 450)
a4.addImage(r4)
a4.scale = 0.4
a4.visible  = false

batsman4= createSprite(windowWidth -700,230)
batsman4.addImage( standing4)
batsman4.scale = 0.4
batsman4.visible = false

batsman5 = createSprite(windowWidth -700,230)
batsman5.addImage(standing3)
batsman5.scale = 0.3
batsman5.visible = false

fielder1 = createSprite(windowWidth - 1280,windowHeight - 250)
fielder1.addImage(f1)
fielder1.scale = 0.2

fielder2 = createSprite(windowWidth - 60,windowHeight - 250)
fielder2.addImage(f2)
fielder2.scale = 0.2

fielder3 = createSprite(windowWidth - 250,windowHeight - 400)
fielder3.addImage(f3)
fielder3.scale = 0.6

fielder4 = createSprite(windowWidth - 1100,windowHeight - 400)
fielder4.addImage(f4)
fielder4.scale = 0.6

fielder5 = createSprite(windowWidth - 1200,windowHeight - 60)
fielder5.addImage(f5)
fielder5.scale = 0.4

fielder6 = createSprite( windowWidth - 160,windowHeight -60)
fielder6.addImage(f6)
fielder6.scale = 0.4

fielder7 = createSprite(windowWidth - 1224,windowHeight - 560)
fielder7.addImage(f7)
fielder7.scale = 0.7

fielder8 = createSprite(windowWidth - 90,windowHeight -560)
fielder8.addImage(keeper)
fielder8.scale = 0.7

bowler = createSprite(windowWidth - 700,windowHeight - 200)
bowler.addImage(bl)
bowler.scale = 0.4

out = createSprite(windowWidth- 650,windowHeight- 450)
out.addImage(outI)
out.scale =3
out.visible = false

ball = createSprite(bowler.x,bowler.y)
ball.addImage(ballImg)
ball.scale = 0.04

b1 = createSprite( windowWidth -20,windowHeight - 100,10,1200)
b1.visible = false
b2 = createSprite(windowWidth- 1354,windowHeight-100,10,1200)
b2.visible = false
b3 = createSprite(windowWidth - 10,windowHeight - 645,2900,10)
b3.visible = false
b4 = createSprite(windowWidth - 10,windowHeight - 10,2900,10)
b4.visible = false
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("darkgreen");
  drawSprites();

  if(gameState === PLAY)
  {
  textSize(20)
  fill("red")
  text (" PRESS THE Q KEY TO KNOW THE BUTTON FOR ALL ",windowWidth -1000,windowHeight - 600)
  text(" run : " + run ,windowWidth -1340,windowHeight - 620) 
  text("wicket : " + wic,windowWidth -1240,windowHeight - 620)
if(keyDown("q"))
{
  textSize(25)
  fill("red")
  text(" IF YOU ARE READY TO FACE BALL  PRESS ENTER BUTTON " ,windowWidth-1000,windowHeight - 500)
  text(" IF YOU WANT TO PLAY SHOT TO RIGHT PRESS KEY     D  ",windowWidth-1000,windowHeight - 450)
  text(" IF YOU WANT TO PLAY SHOT TO LEFT PRESS KEY        A",windowWidth -1000,windowHeight -400)
  text(" IF YOU WANT TO PLAY STRAIGHT SHOT PRESS KEY    W ",windowWidth -1000,windowHeight - 350)
  text(" IF YOU WANT TO PLAY BACK SHOT PRESS KEY             S",windowWidth -1000,windowHeight - 300) 
  text(" TO START GAME CLICK SPACE BUTTON ",windowWidth - 1000,windowHeight - 250)
} 
  
  if(keyDown("enter"))
  {
    a6.visible = false
    a4.visible= false
    out.visible = false

    ball.velocityY = -2
    ball.velocityX = -0.3

    fielder1.addImage(f1)
      fielder2.addImage(f2)
      fielder3.addImage(f3)
      fielder4.addImage(f4)
      fielder5.addImage(f5)
      fielder6.addImage(f6)
      fielder7.addImage(f7) 
      fielder8.addImage(keeper)

      fielder1.scale = 0.2
      fielder2.scale = 0.2
      fielder3.scale = 0.6
      fielder4.scale = 0.6
      fielder5.scale = 0.4
      fielder6.scale = 0.4
      fielder7.scale = 0.7
      fielder8.scale = 0.7
  }

  if(ball.isTouching(batsman2))
  {
      
    if(keyDown("a"))
    {
      batsman.visible = false
      batsman2.visible = true
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false

      ball.velocityX = random(-3,-6)
      ball.velocityY = random(-7,11)  
      }
    }
   
    if(ball.isTouching(batsman3))
    {
      if(keyDown("w"))
      {
        batsman.visible = false
        batsman3.visible = true
        batsman2.visible = false
        batsman4.visible = false
        batsman5.visible = false

        ball.velocityY = random(3,6)
        ball.velocityX= random(1,-1)
      
      }


      if(ball.isTouching(batsman4))
      {
        if(keyDown("d"))
        {
          batsman.visible = false
          batsman4.visible = true 
          batsman3.visible = false
          batsman2.visible = false
          batsman5.visible = false

          ball.velocityX = random(5,6)
          ball.velocityY = random(7,-11)
         
        }
      }
      if(ball.isTouching(batsman5))
    {
      if(keyDown("s"))
      {
        batsman.visible = false
        batsman5.visible = true
        batsman3.visible = false
        batsman4.visible = false
        batsman2.visible = false

        ball.velocityY = random(-5,-6)
        ball.velocityX= random(-10,0)
    
      }
          }
}


    if (ball.isTouching(b1))
    {
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      batsman.visible = true
      batsman2.visible  = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false 
      run = run + 6
      a6.visible = true
    }
    if (ball.isTouching(b2))
    {
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      batsman.visible = true
      batsman2.visible  = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
      run = run + 4
      a4.visible = true
    }
    if (ball.isTouching(b3))
    {
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      batsman.visible = true
      batsman2.visible  = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
      run = run + 4
      a4.visible = true
    }
    if (ball.isTouching(b4))
    {
      ball.x =bowler.x
      ball.y =bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      batsman.visible = true
      batsman2.visible  = false
      batsman3.visible = false
      batsman4.visible = false      
      batsman5.visible = false
      run = run + 6
      a6.visible = true

    }

     if(ball.isTouching(stump))
     {
       textSize(40)
       out.visible = true
      
       ball.x = windowWidth - 680
       ball.y = windowHeight - 285
       ball.velocityX = 0
      ball.velocityY = 0
      wic = wic + 1
      bowler.addAnimation("bowl",frame1)
      batsman2.visible = false 
      batsman3.visible = false 
      batsman4.visible = false
      batsman5.visible = false  
      batsman.visible = true

    }

    if(ball.isTouching(fielder1))
    {
      fielder1.addImage(dive)
      fielder1.scale = 0.8
      fielder2.addImage(frame1)
      fielder2.scale = 0.8
      fielder3.addImage(frame1)
      fielder3.scale = 0.8
      fielder4.addImage(frame1)
      fielder4.scale = 0.8
      fielder5.addImage(frame1)
      fielder5.scale = 0.8
      fielder6.addImage(frame1)
      fielder6.scale = 0.8
      fielder7.addImage(frame1) 
      fielder7.scale = 0.8
      fielder8.addImage(frame1) 
      fielder8.scale = 0.8
      wic = wic+1
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
    }

    if(ball.isTouching(fielder2))
    {
      fielder1.addImage(frame1)
      fielder1.scale = 0.8
      fielder2.addImage(dive)
      fielder2.scale = 0.8
      fielder3.addImage(frame1)
      fielder3.scale = 0.8
      fielder4.addImage(frame1)
      fielder4.scale = 0.8
      fielder5.addImage(frame1)
      fielder5.scale = 0.8
      fielder6.addImage(frame1)
      fielder6.scale = 0.8
      fielder7.addImage(frame1) 
      fielder7.scale = 0.8
      fielder8.addImage(frame1) 
      fielder8.scale = 0.8
      wic = wic+1
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0 
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
    }

    if(ball.isTouching(fielder3))
    {
      fielder1.addImage(frame1)
      fielder1.scale = 0.8
      fielder2.addImage(frame1)
      fielder2.scale = 0.8
      fielder3.addImage(dive)
      fielder3.scale = 0.8
      fielder4.addImage(frame1)
      fielder4.scale = 0.8
      fielder5.addImage(frame1)
      fielder5.scale = 0.8
      fielder6.addImage(frame1)
      fielder6.scale = 0.8
      fielder7.addImage(frame1) 
      fielder7.scale = 0.8
      fielder8.addImage(frame1) 
      fielder8.scale = 0.8
      wic = wic+1

      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0 
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
    }

    if(ball.isTouching(fielder4))
    {
      fielder1.addImage(frame1)
      fielder1.scale = 0.8
      fielder2.addImage(frame1)
      fielder2.scale = 0.8
      fielder3.addImage(frame1)
      fielder3.scale = 0.8
      fielder4.addImage(dive)
      fielder4.scale = 0.8
      fielder5.addImage(frame1)
      fielder5.scale = 0.8
      fielder6.addImage(frame1)
      fielder6.scale = 0.8
      fielder7.addImage(frame1) 
      fielder7.scale = 0.8
      fielder8.addImage(frame1) 
      fielder8.scale = 0.8
      wic = wic+1
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
    }

    if(ball.isTouching(fielder5))
    {
      fielder1.addImage(frame1)
      fielder1.scale = 0.8
      fielder2.addImage(frame1)
      fielder2.scale = 0.8
      fielder3.addImage(frame1)
      fielder3.scale = 0.8
      fielder4.addImage(frame1)
      fielder4.scale = 0.8
      fielder5.addImage(dive)
      fielder5.scale = 0.8
      fielder6.addImage(frame1)
      fielder6.scale = 0.8
      fielder7.addImage(frame1) 
      fielder7.scale = 0.8
      fielder8.addImage(frame1) 
      fielder8.scale = 0.8
      wic = wic+1 

      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
    }

    if(ball.isTouching(fielder6))
    {
      fielder1.addImage(frame1)
      fielder1.scale = 0.8
      fielder2.addImage(frame1)
      fielder2.scale = 0.8
      fielder3.addImage(frame1)
      fielder3.scale = 0.8
      fielder4.addImage(frame1)
      fielder4.scale = 0.8
      fielder5.addImage(frame1)
      fielder5.scale = 0.8
      fielder6.addImage(dive)
      fielder6.scale = 0.8
      fielder7.addImage(frame1) 
      fielder7.scale = 0.8
      fielder8.addImage(frame1) 
      fielder8.scale = 0.8
      wic = wic+1
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
    }

    if(ball.isTouching(fielder7))
    {
      fielder1.addImage(frame1)
      fielder1.scale = 0.8
      fielder2.addImage(frame1)
      fielder2.scale = 0.8
      fielder3.addImage(frame1)
      fielder3.scale = 0.8
      fielder4.addImage(frame1)
      fielder4.scale = 0.8
      fielder5.addImage(frame1)
      fielder5.scale = 0.8
      fielder6.addImage(frame1)
      fielder6.scale = 0.8
      fielder7.addImage(dive) 
      fielder7.scale = 0.8
      fielder8.addImage(frame1) 
      fielder8.scale = 0.8
      wic = wic+1

      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false
    }

    if(ball.isTouching(fielder8))
    {
      fielder1.addImage(frame1)
      fielder1.scale = 0.8
      fielder2.addImage(frame1)
      fielder2.scale = 0.8
      fielder3.addImage(frame1)
      fielder3.scale = 0.8
      fielder4.addImage(frame1)
      fielder4.scale = 0.8
      fielder5.addImage(frame1)
      fielder5.scale = 0.8
      fielder6.addImage(frame1)
      fielder6.scale = 0.8
      fielder7.addImage(frame1) 
      fielder7.scale = 0.8
      fielder8.addImage(dive) 
      fielder8.scale = 0.8
     i= wic = wic+1
      ball.x = bowler.x
      ball.y = bowler.y
      ball.velocityX = 0
      ball.velocityY = 0
      out.visible =true
      batsman.visible = true 
      batsman2.visible = false
      batsman3.visible = false
      batsman4.visible = false
      batsman5.visible = false

    }
      if( wic ===  10)
      {
        wic = 0
        run = 0
        text(" you team players are allout press r to restart ",windowWidth - 600,windowHeight -600)
        if(keyDown("r"))
        {
          gameState = PLAY
          
        }
      }

    }
    }
  
    
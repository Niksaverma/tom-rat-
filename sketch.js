var bg;
var tom, tomI, tomII ,tom3;//tom = cat
var rat,rat1,rat2;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomI=loadImage("images/cat1.png");
    tomII = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadImage("images/cat4.png");
    rat2 =loadAnimation("images/mouse1.png");
    rat1 =loadAnimation("images/mouse2.png","images/mouse3,png");
}

function setup(){
    createCanvas(1000,800);
  
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("cat", tomII);
    tom.scale= 0.2;

    rat = createSprite(200,600);
    rat.addAnimation("rat",rat2);
    rat.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - rat.x < (tom.width - rat.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomII);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        rat.addAnimation("ratLastImage", rat1);
        rat.scale=0.15;
        rat.changeAnimation("ratLastImage");
    }  
    keyPressed();


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomII);
    tom.changeAnimation("tomRunning");
    
    rat.addAnimation("jerryTeasing", rat1);
    rat.frameDelay = 25;
    rat.changeAnimation("jerryTeasing");
}



}

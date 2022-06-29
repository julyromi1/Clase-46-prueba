var parrot1_running, parrot1_collided,martialarts_running,background2,background3,background4,background5,gameOverImg, ground;
var goldcoins, medal;
var jumpSound,collidedSound, troll_collided;
var brick0,brick1,brick3,brick4,brick5;

function preload(){
  parrot1_running = loadAnimation("Pirate parrot1.png","Pirate parrot2.png");//falto cargar png
  parrot1_collided = loadAnimation("crash1.png","Pirate parrot.png","Pirate parrot0.png");
  martialarts_running = loadAnimation("Martial arts character1.png","Martial arts character2.png");
  
  background1 = loadImage("Japón1.jpg");// La imagen no se cargo correctamente en visual
  background2 = loadImage("Verano.jpg");
  background3= loadImage("otoño1.jpg");
  background4= loadImage("invierno.jpg");
  background5= loadImage("parque.png");

  brick0 = loadImage("ladrillo.png");
  brick1 = loadImage("ladrillo1.png");
  brick3 = loadImage("ladrillo3.png");
  brick4 = loadImage("ladrillo4.png");
  brick5 = loadImage("ladrillo5.png");

  goldcoins = loadImage("Gold coins.png");
  medal = loadImage("Medal.png");

  gameOverImg = loadImage("game over.png");
  //restartImg = loadImage("assets/restart.png");

  jumpSound = loadSound("jump.wav");
  collidedSound = loadSound("collided.wav");
  troll_collided = loadAnimation("Dancing troll4.png","Dancing troll2.png","Dancing troll1.png");
  
}

function setup() {
  createCanvas(3000,800);

  background1 = createSprite(1,400,3000,800);
  background1.addImage(background1);
  //background1.scale=0.7
  background1.x = width /2;

  /*background2 = createSprite(1020,570,2040,1140); // La posición de x es mayor al canvas
  background2.addImage(background2);
  background2.scale=0.3
  background2.x = width /2;*/

  /*background3 = createSprite(1020,570,2040,1140); // La posiciónes no estan definidas correctamente
  background3.addImage(background2);
  background3.scale=0.3
  background3.x = width /2;*/

   /*background4 = createSprite(1020,570,2040,1140); // La posiciónes no estan definidas correctamente
  background4.addImage(background2);
  background4.scale=0.3
  background4.x = width /2;*/


  parrot1 = createSprite(100,200,20,50);
  parrot1.addAnimation("running", parrot1_running);
  parrot1.addAnimation("collided", parrot1_collided);
  //parrot1.scale = 0.2;
  parrot1.setCollider("circle",0,0,300)

  ground= createSprite (0,800,3000,15);
  //ground.visible = false;

  



}
function draw(){
  background(255);

  //parrot1.x=camera.position.x-270;
  parrot1.velocityX= 3;

  parrot1.collide(ground);
   
  if(keyDown("space")&& parrot1.y>270) {
    jumpSound.play();
    parrot1.velocityY = -16;
  }

  parrot1.velocityY = parrot1.velocityY + 0.8
  drawSprites();

  createbricks ();


}

function createbricks (){
  if (frameCount%90==0){
    brick1=createSprite (50,50,100,200);
    //brick1.velocityX=-(5 + Score/100) //No entiendo la parte de los números. sirve para que si quieres que los bloques vayan más rapido conforme a la distancia recorrida por ejemplo haces el score ej 200 (tienes en este momento) lo divides en 100 y el cosiente va a ser el número que va a avanzar
    var aleatorio=Math.round(random (1,5));
    switch(aleatorio){
      case 1:brick1.addImage (brick0);
      break;
      case 2:brick1.addImage (brick1);
      break;
      case 3:brick1.addImage (brick3);
      break;
      case 4:brick1.addImage (brick4);
      break;
      case 5:brick1.addImage (brick5);
      break;
      default:break;
    }
      brick1.lifetime=windowWdith/5
      brick1.scale=.6;
      //bricksgroup.add (brick1);
  }
}


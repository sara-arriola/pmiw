let gumball;
let buttons = [];
let ocho  = [];
let key = [];
let ochoTotales = 2;
let startSnd;
let llaveSnd;
let loseSnd;
let winSnd;
let c_random;
let gumballImg;
let gumballDown;
let gumballLeft;
let gumballright;
let nivel = 1;
let vidas = 3;
let cantTotalKeys = 3;
let pantallaGanaste;
let pantallaPerdiste;
let sonidosGame;

function preload(){
  gumballImg = loadImage("up.png");
  pantallaGanaste = loadImage ("ganaste.jpg");
  pantallaPerdiste = loadImage ("perdiste.jpg");
  startSnd = loadSound ("game_start.mp3");
  llaveSnd = loadSound ("pickup_llave.mp3");
  loseSnd = loadSound ("perdiste.mp3");
  winSnd = loadSound ("ganaste.mp3");
  c_random = color(random(255),random(255),random(255));
}

/*--------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------*/
function setup (){
  createCanvas (640, 480);
  rectMode(CENTER);
  gumball = new Gumball();
  for (let i = 0; i < ochoTotales; i++){    
    ocho[i] = new Ocho();
  }
  for (let i = 0; i < cantTotalKeys; i++){    
    key[i] = new Keys();
  }
  sonidosGame = new SonidosJuego();

  //buttons[0] =     new Button(10,66,66,44,'rgb(0,255,0)','rgb(255,0,0)','button1', reactToClick )  ;

  buttons.push(
    new Button(
      110,400,            // position (x,y)
      233,80,           // size (w,h)
      'rgb(140,255,0)', // primary color
      'rgb(255,230,30)', // color when hovered
      'VOLVER A INICIAR',        // text for button
      clickeoButton      // function that will be called                      
    )                   // when button is clicked
  );
  

  noStroke();
}
/*--------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------*/
function runGame(){
  background (c_random);
  // Dibuja un rectángulo
  rect(50, 0, 1200, 50); // negro 
  fill(c_random);    
  rect(300, 0,55, 50); // puerta de salida 
  // Escribe texto dentro del rectángulo
  fill(255,255,255);
  textSize(18);
  text('Nivel', 2, 15);    
  text(  nivel , 66, 15);  
  text('Vidas', 562, 15);    
  text(  vidas, 626 , 15);  

  gumball.move();
  gumball.display();
  gumball.checkOnscreen();
  for (let i = 0; i < ochoTotales; i++){
    ocho[i].move();
    ocho[i].display();
    ocho[i].checkCollision();
  }
  for (let i = 0; i < cantTotalKeys; i++){
    key[i].display();
    key[i].checkIfCapturado();
  }
}
function recrearLlaves(){  //cambia d epos las llaves
  for (let i = 0; i < cantTotalKeys; i++){    
    key[i] = new Keys();
  }
}

function draw (){
  

  if (nivel == 4){
    background (pantallaGanaste);  //cambiar por una funcion que haga la pantalla de ganaste. 
    buttons[0].display();
    
  }else {
    if (vidas != 0) {
      runGame();
    } else {
      background (pantallaPerdiste);
    }
      
    
  }

  

  }

// declaracion de la Clase  que gestiona los sonidos del juego 
  class SonidosJuego {
    constructor() {            
      this.sonidos = [];
      this.sonidos[0] = loadSound("game_start.mp3");
      this.sonidos[1] = loadSound("pickup_llave.mp3");
      this.sonidos[2] = loadSound("perdiste.mp3");
      this.sonidos[3] = loadSound("ganaste.mp3");      
    }
  
    ejecutarSonido(indice) {
      if (indice >= 0 && indice < this.sonidos.length) {
        this.sonidos[indice].play();
      } else {
        console.error("Índice de sonido inválido");
      }
    }
  }


  class Ocho {
    constructor(){
    //let semilla = hour() * 3600 + minute() * 60 + second();
    //randomSeed(semilla);
    this.x = random(width);;
    this.y = random(20,height-40);
    this.w = 60;
    this.h = 20;
    this.c =   color(100 +random(255),100 + random(155),100 + random(155)); 
  }
  display(){
    fill(this.c);
    rect(this.x,this.y,this.w,this.h);
    //wheels
    fill(0);
    circle(this.x-this.w/3,this.y+this.h/2,10)
    circle(this.x+this.w/3,this.y+this.h/2,10)
  }
  move(){
    this.x-=2;
    if (this.x<0){
      this.x = width;
    }
  }
  checkCollision(){
    if (dist(this.x,this.y,gumball.x,gumball.y)<30){
      print("colision")
      //loseSnd.play();
      sonidosGame.ejecutarSonido(2);
      gumball.y = height - gumball.h/2;
      nivel = 1;
      vidas --;
    }
  } 
}

class Button {
  
  // defining the constructor, which will accept a number of arguments
  constructor(x,y,w,h,col,hover_col,displayText,reactionFunction) {
    // then assign those arguments to new variables that will be stored in
    // the class
    // these variables, beginning with 'this' are often referred to as 
    // 'properties'
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = color(col);
    this.hover_col = color(hover_col);
    this.currentlyHovering = false;
    this.displayText = displayText;
    this.reactionFunction = reactionFunction;
  }
  
  // display will draw anything visual to canvas
  display() {
    
    // check to see if current button is being hovered over
    if(this.isHoveredOver()) {
      fill(this.hover_col)
    } else {
      fill(this.col);
    }
    
    rect(this.x,this.y,this.w,this.h);

    fill('black');
    text(this.displayText, this.x, this.y + 20);
  }
  
  // check to see mouse is over the current button
  isHoveredOver() {
    return (mouseX > this.x && mouseX < this.x + this.w && 
       mouseY > this.y && mouseY < this.y + this.h);
  }
}

class Gumball {

  constructor(){
    this.w = 40;
    this.h = 40;
    this.x = width/2;
    this.y = height - this.w;
    this.c = color(0,255,0);
  }
  display(){
     image(gumballImg,this.x,this.y,this.w,this.w)
  }
  move(){
    if (keyIsPressed){
      if (keyCode === UP_ARROW) {
       this.y-=3;
      }
       if (keyCode === DOWN_ARROW) {
       this.y+=3;
      }
        if (keyCode === RIGHT_ARROW) {
          
          this.x+=3;
          
      }
       if (keyCode === LEFT_ARROW) {
       this.x-=3;
      }
    }
  }
  checkOnscreen(){    
    if ( this.y <15 && this.x > 260  && this.x < 300 ) { 
            print("Nivel: ",nivel);            
            nivel++;
            //winSnd.play();            
            sonidosGame.ejecutarSonido(3);
            c_random= color(200+random(55),200+random(55),200+random(100));
            this.y = height - this.h;
            recrearLlaves();
      }
    
    else{
          if (this.y < 0){
            print("Not Exit!")
            loseSnd.play();
            sonidosGame.ejecutarSonido(2);
            gumball.y = height - gumball.h/2;
            
          }
      }  
  }
}
class Keys {
  constructor(){
  //let semilla = hour() * 3600 + minute() * 60 + second();
  //randomSeed(semilla);
  this.x = random(width);;
  this.y = random(20,height-40);
  this.w = 60;
  this.h = 20;
  this.c =   color(100 +random(255),100 + random(155),100 + random(155)); 
  this.capturado = false;
}
display(){
  if (this.capturado ==false) { // impide que el objeto capturado sea dibujado
      fill(this.c);
      rect(this.x,this.y,this.w,this.h);
      //wheels
      fill(0);
      circle(this.x-this.w/3,this.y+this.h/2,10)
      circle(this.x+this.w/3,this.y+this.h/2,10)
    }
}
checkIfCapturado(){
  if (dist(this.x,this.y,gumball.x,gumball.y)<30 && !this.capturado){
    print("colision")    
    sonidosGame.ejecutarSonido(1);
    this.capturado = true; // marca que este objeto fue capturado
  }
} 
}


function mousePressed() {

  if(buttons[0].isHoveredOver()) {
    background (pantallaPerdiste);
    buttons[0].reactionFunction();
  }

}

// custom function that reacts to clicks
function clickeoButton() {    
  vidas=3;
  
}

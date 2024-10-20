let miFuente;
let dialogo;
let fotoPantalla0;
let fotoPantalla1;
let fotoPantalla2;
let fotoPantalla3;
let fotoPantalla4;

let esquinaX1 = 220;
let esquinaY1 = 400;
let ancho = 200;
let alto = 50;

let arreglImagenes = [];
let posicionesArreglo = [];
let indiceArreglo = 0;
let r, g, b;
let cambioColorCadaNFrames = 30; // Cambiar color cada 30 cuadros
let pantallaPresentacion = true; 

let musica;

function preload() {
  miFuente = loadFont('data/gumball.ttf');
  dialogo= loadStrings('data/dialogo.txt');
  musica = loadSound('data/tawog_credits.mp3');
  fotoPantalla0 = loadImage('data/pantalla_0.jpg');
  fotoPantalla1 = loadImage('data/pantalla_1.jpg');
  fotoPantalla2 = loadImage('data/pantalla_2.jpg');
  fotoPantalla3 = loadImage('data/pantalla_3.jpg');
  fotoPantalla4 = loadImage('data/pantalla_4.jpg');
  arreglImagenes[0]=fotoPantalla0; 
  arreglImagenes[1]=fotoPantalla1;
  arreglImagenes[2]=fotoPantalla2;
  arreglImagenes[3]=fotoPantalla3;
  arreglImagenes[4]=fotoPantalla4;
  posicionesArreglo[1] = 0; //posición posicionesArreglo[0] no requerido
  posicionesArreglo[2] = 1;
  posicionesArreglo[3] = 2;
  posicionesArreglo[4] = 3;
}


function setup() {
  createCanvas(640, 480);
  //PantallaInicio();
  boton1 = createButton('1');
  boton2 = createButton('2');
  boton3 = createButton('3');
  boton1.hide ();
  boton2.hide ();
  boton3.hide ();
}

function draw() {
  if (pantallaPresentacion) {
    // Cambiar el color del texto en la pantalla de inicio cada N cuadros
    if (frameCount % cambioColorCadaNFrames == 0) {
      r = random(255);
      g = random(255);
      b = random(255);
    }
    PantallaInicio();  // Redibujar la pantalla de inicio
  } else {
    if (indiceArreglo == 4){
      boton1.show ();
    } else { boton1.hide(); }
    pantalla_reusada(arreglImagenes[indiceArreglo], posicionesArreglo[indiceArreglo]);
  }
}

function PantallaInicio() {
  // Mostrar la imagen de fondo de la pantalla de inicio
  image(fotoPantalla0, 0, 0);
  // Dibujar el rectángulo del botón
  fill(20);
  rect(esquinaX1, esquinaY1, ancho, alto);
  textFont(miFuente);
  textSize(44);
  textAlign(CENTER, CENTER);
  fill(r, g, b);
  text('Iniciar', esquinaX1 + ancho / 2, esquinaY1 + alto / 2);
  textSize(28);
  text ('Creditos',esquinaX1 + ancho / 2, esquinaY1 / 10);
}

function mousePressed() {
  pantallaPresentacion = false;
   indiceArreglo ++;
  if (indiceArreglo == 1) {
    musica.setVolume(0.3);
    musica.loop();
    musica.play();
  } 
}

function pantalla_reusada (fotoPantallaGral,nroLinea ){
  image(fotoPantallaGral, 0, 0);
  fill(66,40,36,170);
  noStroke();
  rect (50,360,540,110,12);
  TextosTXT(30, 30, nroLinea );
}

function TextosTXT(posX, posY, numLinea) {
  push();
  fill(255);
  textSize(24);
  textFont(miFuente);
  let textoCompleto = dialogo[numLinea];
  let textosDivididos = split(textoCompleto, ' > ');
  text(textosDivididos[0],70, 330, 90, 90);
  textFont('Courier New');
  textSize(18);
  textAlign(LEFT, CENTER);
  text(textosDivididos[1], 60, 380, 550, 100);
  pop();
}

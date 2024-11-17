let estado=0;
let pantallas = [];
let imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10,imagen11,imagen12,imagen13,imagen14;
let audio; // Variable para el sonido


function preload() {
    imagen1=loadImage("data/menu.png");
    imagen2=loadImage("data/Pantalla1.png");
    imagen3=loadImage("data/Pantalla2.jpeg");
    imagen4=loadImage("data/Pantalla3.jpg");
    imagen5=loadImage("data/Pantalla4.jpg");
    imagen6=loadImage("data/Pantalla5.jpg");
    imagen7=loadImage("data/Pantalla7.jpg");
    imagen8=loadImage("data/minijuego.jpg");
    imagen9=loadImage("data/final2.jpg");
    imagen10=loadImage("data/Pantalla8.png");
    imagen11=loadImage("data/final1.png");
    imagen12=loadImage("data/Pantalla9.jpg");
    imagen13=loadImage("data/final3.jpg");
    imagen14=loadImage("data/final4.jpg");
    imagen15=loadImage("data/pantalla_creditos.jpg");
    audio = loadSound("data/tawog_credits.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantallas[0]={imagen:imagen1,relato:"CRÉDITOS",posXrect:width/2, posYrect:height*0.9,anchorect:180,altorect:30};//boton siguiente si
  pantallas[1]={imagen:imagen2,relato:"En el cuarto de los chicos: Gumball y Darwin ven videos en la PC.",posXrect:width/2,posYrect:height*0.9,anchorect:590,altorect:30};//boton sig si
  pantallas[2]={imagen:imagen3,relato:"De repente, la computadora se apaga y Darwin desaparece.",posXrect:width/2,posYrect:height*0.9,anchorect:540,altorect:30};//boton sig si
  pantallas[3]={imagen:imagen4,relato:"La PC se reinicia y en el chat aparece un mensaje de ElmorePlus.",posXrect:width/2,posYrect:height*0.9,anchorect:595,altorect:30};//boton sig si
  pantallas[4]={imagen:imagen5,relato:"¿Cómo reaccionará Gumball?",posXrect:width/2,posYrect:height*0.1,anchorect:300,altorect:30};//boton sig no
  pantallas[5]={imagen:imagen6,relato:"El extraño le manda una invitación a una videollamada.",posXrect:width/2,posYrect:height*0.1,anchorect:550,altorect:30};//boton sig si
  pantallas[6]={imagen:imagen6,relato:"¿Gumball responde la llamada?",posXrect:width/2,posYrect:height*0.1,anchorect:400,altorect:30};//boton sig no
  pantallas[7]={imagen:imagen7,relato:"Es Darwin, vivo. Intentan matarlo y Gumball deberá salvarlo.",posXrect:width/2,posYrect:height*0.9,anchorect:580,altorect:30};//boton sig SI
  pantallas[8]={imagen:imagen8,relato: "MINIJUEGO",posXrect:width/2,posYrect:height*0.8,anchorect:150,altorect:30};//boton sig NO, apretar en MINIJUEGO
  pantallas[9]={imagen:imagen8,relato:"¿Gumball logra rescatar a Darwin?",posXrect:width/2,posYrect:height*0.1,anchorect:400,altorect:30};//boton sig NO
  pantallas[10]={imagen:imagen9,relato:"FIN:Todo vuelve a la normalidad.",posXrect:width/2,posYrect:height*0.8,anchorect:300,altorect:30};//boton sig NO
  pantallas[11]={imagen:imagen10,relato:"¡Atención!-dice el extraño-¿Quién soy?",posXrect:width/2,posYrect:height*0.1,anchorect:380,altorect:30};//boton sig NO
  pantallas[12]={imagen:imagen11,relato:"FIN...¡La pc se autodestruye y Gumball nunca más verá a Darwin!",posXrect:width/2,posYrect:height*0.9,anchorect:635,altorect:50};//boton sig NO
  pantallas[13]={imagen:imagen12,relato:"El Internet le da a Gumball una última oportunidad,¿a quién salvará?",posXrect:width/2,posYrect:height*0.1,anchorect:630,altorect:30};//boton sig NO
  pantallas[14]={imagen:imagen13,relato:"¡FIN!Darwin se salva y Gumball queda atrapado por siempre.",posXrect:width/2,posYrect:height*0.1,anchorect:638,altorect:30};//boton sig NO
  pantallas[15]={imagen:imagen14,relato:"FIN. Los dos quedan atrapados y nadie nunca supo más nada de ellos.",posXrect:width/2,posYrect:height*0.9,anchorect:638,altorect:30};//boton sig NO
}
function draw() {
  console.log(mouseX,mouseY);
  background(0);
   if (estado === 16) {
    creditos(); // Llama a la función creditos que muestra la pantalla de los créditos
    return; // Evita que siga ejecutando el resto del código, ya que estamos en la pantalla de créditos
  }
  // Obtener la pantalla actual usando el estado
  let pantallaActual = pantallas[estado];
   
  // Dibuja la pantalla correspondiente
  estructura(pantallaActual.imagen, pantallaActual.posXrect, pantallaActual.posYrect, pantallaActual.anchorect, pantallaActual.altorect,pantallaActual.relato);
 
  if (estado===4){
    botonOpciones(137.5, 420, 130, 20,"¿Quién eres?");
    botonOpciones(320, 420, 90, 20,"¿Darwin?");
    botonOpciones(502.5, 420, 170, 20,"Ignora el mensaje");
  }
  if (estado===6 || estado ===9){ 
    botonOpciones(160, 420, 34, 22,"Si");
    botonOpciones(480, 420, 34, 22,"No");
}
if (estado===11){
    botonOpciones(137.5, 420, 130, 20,"Banana Joe");
    botonOpciones(320, 420, 90, 20,"Anais");
    botonOpciones(502.5, 420, 170, 20,"El Internet");
    
}
if (estado===13){
   botonOpciones(137.5, 420, 130, 20,"Darwin");
    botonOpciones(320, 420, 100, 20,"Gumball");
    botonOpciones(502.5, 420, 120, 20,"Ninguno");
}
if (estado === 10 || estado === 12 || estado === 14 || estado === 15){
    botonOpciones(width/2, height/2, 130, 20,"REINICIO");
}
}
function mousePressed() {
  
  switch(estado){
     case 0:
      // Cambio al estado 16 (Créditos)
      if (mouseX >= 230 && mouseX <= 410 && mouseY >= 417 && mouseY <= 447) {
        estado = 16; // Cambiar a estado 16 (Créditos)
      }
      // Verificar si el clic está en la zona del botón derecho (siguiente)
      else if (mouseX >= width - 60 && mouseX <= width && mouseY >= height / 2 - 10 && mouseY <= height / 2 + 10) {
        estado++; // Cambiar estado incrementando de 1
      }
      break;

    case 1:
    case 2:
    case 3:
    case 5:
    case 7:
      // Verificar si el clic está en la zona del botón derecho (siguiente)
      if (mouseX >= width - 60 && mouseX <= width && mouseY >= height / 2 - 10 && mouseY <= height / 2 + 10) {
        estado++; // Cambiar estado incrementando de 1
      }
      break;

    case 4:
      // ESTADO 4
      if (mouseX >= 72.5 && mouseX <= 202.5 && mouseY >= 410 && mouseY <= 430) {
        estado = 5;
      } else if (mouseX >= 275 && mouseX <= 365 && mouseY >= 410 && mouseY <= 430) {
        estado = 11;
      } else if (mouseX >= 417.5 && mouseX <= 587.5 && mouseY >= 410 && mouseY <= 430) {
        estado = 11;
      }
      break;

    case 6:
      // ESTADO 6
      if (mouseX >= 143 && mouseX <= 177 && mouseY >= 409 && mouseY <= 431) {
        estado = 7;
      } else if (mouseX >= 463 && mouseX <= 497 && mouseY >= 409 && mouseY <= 431) {
        estado = 12;
      }
      break;

    case 8:
      // ESTADO 8
      if (mouseX >= 245 && mouseX <= 395 && mouseY >= 369 && mouseY <= 399) {
        estado = 9;
      }
      break;

    case 9:
      // ESTADO 9
      if (mouseX >= 143 && mouseX <= 177 && mouseY >= 409 && mouseY <= 431) {
        estado = 10;
      } else if (mouseX >= 463 && mouseX <= 497 && mouseY >= 409 && mouseY <= 431) {
        estado = 13;
      }
      break;

    case 11:
      // ESTADO 11
      if ((mouseX >= 72.5 && mouseX <= 202.5 && mouseY >= 410 && mouseY <= 430) ||
          (mouseX >= 275 && mouseX <= 365 && mouseY >= 410 && mouseY <= 430)) {
        estado = 12;
      } else if (mouseX >= 417.5 && mouseX <= 587.5 && mouseY >= 410 && mouseY <= 430) {
        estado = 8;
      }
      break;

    case 13:
      // ESTADO 13
      if (mouseX >= 72.5 && mouseX <= 202.5 && mouseY >= 410 && mouseY <= 430) {
        estado = 10;
      } else if (mouseX >= 270 && mouseX <= 370 && mouseY >= 410 && mouseY <= 430) {
        estado = 14;
      } else if (mouseX >= 442.5 && mouseX <= 562.5 && mouseY >= 410 && mouseY <= 430) {
        estado = 15;
      }
      break;

    case 16:
      // VOLVER (ESTADO 16 -> ESTADO 0)
      if (mouseX >= width - 60 && mouseX <= width && mouseY >= height / 2 - 10 && mouseY <= height / 2 + 10) {
        estado = 0;
        audio.stop(); // Detener el audio
      }
      break;

    case 10:
    case 12:
    case 14:
    case 15:
      // REINICIO: Si se hace clic en el área de reinicio
      if (mouseX >= 255 && mouseX <= 385 && mouseY >= 230 && mouseY <= 250 && audio.isPlaying()) {
        estado = 0;
        audio.stop(); // Detener el audio
        console.log("estado 0");
      }
      break;
  }
   // Reproducir el audio si el estado es mayor a 0 y no se está reproduciendo
  if (estado >= 1 && !audio.isPlaying()) {
    audio.play(); // Reproducir el audio
    audio.setLoop(true); // Hacer que el audio se repita
    audio.setVolume(0.5); // Ajustar volumen
  }
}

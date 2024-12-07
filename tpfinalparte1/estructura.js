function estructura(imagenfondo, posXrect, posYrect, anchorect, altorect, texto) {
  //Creo una función que va a generar la estructura base del programa, con imagen de fondo, botón siguiente y el recuadro con el relato
  //Imagen
  image(imagenfondo, 0, 0);
  rectMode(CENTER);
  //Botón Siguiente
  if (estado === 0 || estado === 1 || estado === 2 || estado === 3 || estado === 5 || estado === 7) {
  fill(255);
  rect( width - 30, height / 2, 60, 20);
  fill(0);
  textSize(10);
  text("SIGUIENTE", width-30, height/2);
  }
  //Recuadro relato.
  fill(255)
  rect(posXrect, posYrect, anchorect, altorect);
  //Texto
  textSize(20);
  fill(0);
  textAlign(CENTER, CENTER);
  text(texto, posXrect, posYrect);
}

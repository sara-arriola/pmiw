function botonOpciones(x, y, ancho, alto, texto) {
  //Creo una función con parámetros que va a crear los botones de decisión
  rectMode(CENTER);
  fill(255);
  rect(x, y, ancho, alto);
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(texto, x, y);
}

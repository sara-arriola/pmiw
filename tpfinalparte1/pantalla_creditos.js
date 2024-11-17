function creditos() {
  //Armo una funcion creditos, sin parámetros, que me dibuje la pantalla de créditos y solo deba llamarla en el Draw
  image(imagen15, 0, 0); 
  textAlign(CENTER, CENTER); 
  textSize(20); 
  fill(255); 
  text("Creado por Ben Bocquelet", width / 2, height * 0.75);
  text("Dirigido por Mic Graves · Antoine Perez", width / 2, height * 0.8);
  text("Trabajo realizado por las alumnas: Alana Cañete, Sara Arriola", width / 2, height * 0.95);
  //boton para volver al Inicio
  fill(255);
  rect( width - 30, height / 2, 60, 20);
  fill(255,0,0);
  textSize(13);
  text("VOLVER", width-30, height/2);
}

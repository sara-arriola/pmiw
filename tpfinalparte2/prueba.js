
let cambiador;

function preload() {
  cambiador = new Pantallas("Instrucciones.jpg", "Creditos.jpg");
}

function setup() {
    createCanvas (640, 480);
    rectMode(CENTER);
    cambiador.mostrar();
}

function draw() {
}

function mouseClicked() {
  cambiador.cambiarImagen();
}

class Pantallas {
    constructor(img1Path, img2Path) {
      this.img1 = loadImage(img1Path);
      this.img2 = loadImage(img2Path);
      this.currentImage = this.img1;     
    }
  
    mostrar() {
        background(this.currentImage);
    }
  
    cambiarImagen() {
      if (this.currentImage === this.img1) {
        this.currentImage = this.img2;
      } else {
        this.currentImage = this.img1;
      }
    }
  }


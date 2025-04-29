// parametri

let parti = 100;
let parola = "DNA";

// asset

let font;

function preload() {
  font = loadFont("./assets/radiometry.ttf");
}

let cam; // variabile per la telecamera

// codice

let h_parti;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //con WEBGL attivo la modalità 3d

  textFont(font);
  textAlign(CENTER);

  h_parti = height / parti;
  textSize(h_parti);

  cam = createCamera(); // funzione che crea la telecamera
  cam.setPosition(800, 0, 1000); // posizione della telecamera
  cam.lookAt(0, 0, 0); // la telecamera guarda verso il centro della scena
}

function draw() {
  background("black");

  //orbitControl();
  //la funzione orbitControl consente di ruotare la telecamera degli elementi 3d

  translate(0, -height / 2);

  for (let i = 0; i < parti; i++) {
    push();
    let x = 0; //map(cos(frameCount / 50 + i * 1), -1, 1, -100, 100)
    let y = 0; //map(cos(frameCount / 50 + i * 2), -1, 1, -200, 100)
    let z = map(cos(frameCount / 50 + i * 3), -1, 1, -300, 100);

    translate(x, y, z);

    let y_parte = i * h_parti;
    let y_parola = y_parte + h_parti - textDescent();
    text(parola, 0, y_parola);

    pop();
  }
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}

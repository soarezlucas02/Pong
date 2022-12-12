let colidiu=false;
//variaveis da bolinha
let xBolinha=300;
let yBolinha=200;
let diametro=20;

let velocidadebX=5;
let velocidadebY=5;

//variaveis da raquete
let raqueteComprimento=10;
let raqueteAltura=70;
let xRaquete=10;
let yRaquete=200;

let xRaquete2=580;
let yRaquete2=200;

//placar do jogo
let meuspontos=0;
let pontosoponente=0;

//sons do jogo
let trilha;
let ponto;
let raquetada;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificarColisaoBorda();
  mostraRaquete1(xRaquete,yRaquete);
  mostraRaquete1(xRaquete2,yRaquete2);
  movimentominhaRaquete();
  movimentoRaquete2();
  //verificarColisaoRaquete();
  //verificarColisaoRaquete2();
  verificarColisaoBiblio(xRaquete,yRaquete);
  verificarColisaoBiblio(xRaquete2,yRaquete2);
  placar();
  marcarpontos()
}


function mostraBolinha(){
 circle(xBolinha, yBolinha, diametro); 
}

function mostraRaquete1(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}


function movimentaBolinha(){
  xBolinha+=velocidadebX;
  yBolinha+=velocidadebY;
}

function verificarColisaoBorda(){
  if (xBolinha>(width-diametro/2) || xBolinha<(0+diametro/2)) {
    velocidadebX=velocidadebX*(-1);
    ponto.play();
  }

  if (yBolinha>(height-diametro/2) || yBolinha<(0+diametro/2)) {
    velocidadebY=velocidadebY*(-1);
  } 
}
/*function movimentoRaquete2(){
  if(keyIsDown(87)){
    if(yRaquete2>0){
    yRaquete2 -= 10;
    }
  }
  if(keyIsDown(83)){
    if(yRaquete2<400-raqueteAltura){
    yRaquete2 += 10;
    }
  }
}
*/
function movimentominhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    if(yRaquete>0){
    yRaquete -= 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yRaquete<400-raqueteAltura){
    yRaquete += 10;
    }
  }
}

function movimentoRaquete2(){
  velocidadeyOponente=yBolinha-yRaquete2-raqueteComprimento/2 -30;
  yRaquete2+=velocidadeyOponente;
}

/*function verificarColisaoRaquete(){
  if (xBolinha==xRaquete+raqueteComprimento+diametro/2 && (yBolinha>=yRaquete && yBolinha<=(yRaquete+raqueteAltura))) {
    velocidadebX=velocidadebX*(-1);
  }
}

function verificarColisaoRaquete2(){
  if (xBolinha==xRaquete2-diametro/2 && (yBolinha>=yRaquete2 && yBolinha<=(yRaquete2+raqueteAltura))) {
    velocidadebX=velocidadebX*(-1);
  }
}*/

function verificarColisaoBiblio(x,y){
  colidiu=collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro/2);
  if(colidiu){
    velocidadebX*=-1;
    raquetada.play();
  }
}

function placar(){
  textAlign(CENTER);
  textSize(16);
  fill(color(255,40,0));
  rect(180,10,40,20);
  fill(255);
  text(meuspontos, 200, 26);
  fill(color(255,40,0));
  rect(380,10,40,20);
  fill(255);
  text(pontosoponente, 400, 26);
}

function marcarpontos(){
  if(xBolinha<10){
    pontosoponente+=1;
  }
  if(xBolinha>590){
    meuspontos+=1;
  }
}
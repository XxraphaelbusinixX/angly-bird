// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var motorDaFisica, mundo;
var chao,plataforma;
var caixa1, caixa2, caixa3,caixa4,caixa5
var pig1,pig2
var tronco1,tronco2,tronco3,tronco4
var passaro;
var estilingue;
var fundo_imagem
var pontuacao = 0
var estado = "inicio"
var enderecoImagem = "sprites/bg.png"
var cor = "black"

function preload(){
  determinaFundo()
}

function setup() {
  createCanvas(1200, 600);

  motorDaFisica = Engine.create();
  mundo = motorDaFisica.world;

  chao = new Chao(600, 590, 1200, 20)
  plataforma = new Chao(200,495,400,170)
 
  caixa1 = new Caixa(700, 520, 70, 70);
  caixa2 = new Caixa(920, 520, 70, 70);
  pig1 = new Pig (810, 520);
  tronco1 = new Tronco(810, 460, 300, PI/2)

  caixa3 = new Caixa(700, 440, 70, 70);
  caixa4 = new Caixa(920, 440, 70, 70);
  pig2 = new Pig (810, 440);
  tronco2 = new Tronco(810, 380, 300, PI/2)

  caixa5 = new Caixa(810, 160, 75, 75);
  tronco3 = new Tronco(760, 120, 150, PI/7)
  tronco4 = new Tronco(870, 120, 150, -PI/7)

  passaro = new Passaro(370,235)

estilingue = new Estilingue(passaro.corpo,{x:390,y:235})


}


function draw() {

  if (fundo_imagem) {
    background(fundo_imagem);

  }
 textSize(20)
fill(cor)
  text("Score: "+pontuacao,1100,50)

  Engine.update(motorDaFisica);

chao.desenha()
plataforma.desenha()

  caixa1.desenha();
  caixa2.desenha();
  pig1.desenha();
  pig1.placar();
  tronco1.desenha();

  caixa3.desenha();
  caixa4.desenha();
   pig2.desenha();
   pig2.placar();
  tronco2.desenha();

  tronco3.desenha();
  tronco4.desenha();
  caixa5.desenha();
  estilingue.desenha();
  passaro.desenha();



}

function mouseDragged(){
  if (estado !== "the world") {
    Matter.Body.setPosition(passaro.corpo,{x:mouseX,y:mouseY})
  
  }
 
  }

function mouseReleased(){
  estilingue.voar()
  estado = "the world"
}


async function determinaFundo(){
var resposta = await fetch("https://worldtimeapi.org/api/timezone/America/Sao_Paulo")
var respostaJson = await resposta.json()

var hora = respostaJson.datetime.slice(11,13)

if (hora>=6 && hora<=19) {
  enderecoImagem = "sprites/bg.png"
  cor = "black"
} else {
  enderecoImagem = "sprites/bg2.jpg"
cor = "white"
}

fundo_imagem = loadImage(enderecoImagem)
}

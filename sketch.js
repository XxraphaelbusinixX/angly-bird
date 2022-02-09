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

function setup() {
  createCanvas(1200, 600);

  motorDaFisica = Engine.create();
  mundo = motorDaFisica.world;

  chao = new Chao(600, 590, 1200, 20)
  plataforma = new Chao(200,495,400,170)
 
  caixa1 = new Caixa(700, 320, 70, 70);
  caixa2 = new Caixa(920, 320, 70, 70);
  pig1 = new Pig (810, 350);
  tronco1 = new Tronco(810, 260, 300, PI/2)

  caixa3 = new Caixa(700, 240, 70, 70);
  caixa4 = new Caixa(920, 240, 70, 70);
  pig2 = new Pig (810, 220);
  tronco2 = new Tronco(810, 180, 300, PI/2)

  caixa5 = new Caixa(810, 160, 75, 75);
  tronco3 = new Tronco(760, 120, 150, PI/7)
  tronco4 = new Tronco(870, 120, 150, -PI/7)

  passaro = new Passaro(200,300)

estilingue = new Estilingue(passaro.corpo,{x:200,y:100})
}


function draw() {
  background("white");

  Engine.update(motorDaFisica);

chao.desenha()
plataforma.desenha()

passaro.desenha();

  caixa1.desenha();
  caixa2.desenha();
  pig1.desenha();
  tronco1.desenha();

  caixa3.desenha();
  caixa4.desenha();
   pig2.desenha();
  tronco2.desenha();

  tronco3.desenha();
  tronco4.desenha();
  caixa5.desenha();
  estilingue.desenha();

}

function mouseDragged(){
  Matter.Body.setPosition(passaro.corpo,{x:mouseX,y:mouseY})
  }

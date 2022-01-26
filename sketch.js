// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var motorDaFisica, mundo;
var chao;
var caixa1, caixa2, caixa3,caixa4,caixa5
var pig1,pig2
var tronco1,tronco2,tronco3,tronco4
var passaro;

function setup() {
  createCanvas(1200, 600);

  motorDaFisica = Engine.create();
  mundo = motorDaFisica.world;

  chao = new Chao(600, 590, 1200, 20)
 
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

  passaro = new Passaro(200,200)

}


function draw() {
  background("black");

  Engine.update(motorDaFisica);

chao.desenha()

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
}
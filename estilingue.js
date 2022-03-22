class Estilingue{
  constructor(corpoA,pontoB){
    var opicoes = {
      bodyA:corpoA,
      pointB:pontoB,
      length:2,
      stiffness:0.01,
      damping:0.05
    }
    
    this.pontoB = pontoB
    this.estilingue = Constraint.create(opicoes)
    this.imagem1 = loadImage("sprites/sling1.png")
    this.imagem2 = loadImage("sprites/sling2.png")
    this.imagem3 = loadImage("sprites/sling3.png")
    World.add(mundo,this.estilingue)
  }

  desenha(){
  
    image(this.imagem1,380,210);
    image(this.imagem2,353,200);

    if (this.estilingue.bodyA){
      var pontoA = this.estilingue.bodyA.position
      push()
 imageMode(CENTER);
      stroke(48,22,8)

      if (pontoA.x<220) {
        strokeWeight(3)
        
      line(pontoA.x-15,pontoA.y,this.pontoB.x-20,this.pontoB.y)
      line(pontoA.x-15,pontoA.y,this.pontoB.x+20,this.pontoB.y)
      } else {
        strokeWeight(7)
        line(pontoA.x-15,pontoA.y,this.pontoB.x-20,this.pontoB.y)
        line(pontoA.x-15,pontoA.y,this.pontoB.x+20,this.pontoB.y) 
      }
      pop()

    }
  }

  voar(){
    this.estilingue.bodyA = null;
  }
}
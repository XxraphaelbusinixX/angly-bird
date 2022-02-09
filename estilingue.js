class Estilingue{
constructor(corpoA,pontoB){
    var opicoes = {
        bodyA:corpoA,
        pointB:pontoB,
        length:10,
        stiffness:0.04
      }
      this.pontoB = pontoB
    
     this.estilingue = Constraint.create(opicoes)
      World.add(mundo,this.estilingue)
}

desenha(){
var pontoA = this.estilingue.bodyA.position

line(pontoA.x,pontoA.y,this.pontoB.x,this.pontoB.y)

}

}
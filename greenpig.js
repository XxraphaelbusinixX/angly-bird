class Pig extends Base {
    // propriedades
    constructor(x, y) {
    var opcioes = {
    restitution:0.8,
    friction:0.3,
    density:1.0
    }
    super(x,y,50,50,opcioes)
    this.imagem =loadImage("sprites/enemy.png")
   this.visibilidade = 255
    }

    placar(){
      if (this.visibilidade<0 &&this.visibilidade>-1005){
pontuacao = pontuacao+1

      }
    }
  
  desenha(){
if (this.corpo.speed<5) {
  super.desenha()
} else {
  
push()
  this.visibilidade = this.visibilidade-5
  tint(255,this.visibilidade)
  image(this.imagem,this.corpo.position.x,this.corpo.position.y,50,50)
  World.remove(mundo,this.corpo)
  pop()
}

  }
  }
  
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
    }
  
  
  }
  
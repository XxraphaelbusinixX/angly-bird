class Caixa extends Base {
    // propriedades
    constructor(x, y, largura, altura) {
    var opcioes = {
    restitution:0.8,
    friction:1.5,
    density:1.0
    }
    super(x,y, largura, altura,opcioes)
      this.imagem = loadImage("sprites/wood1.png")
    }
  }
  
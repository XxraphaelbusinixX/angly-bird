class Passaro extends Base {
    // propriedades
    constructor(x, y) {
    var opcioes = {
    restitution:0.8,
    friction:0.3,
    density:1.5
    }
    super(x,y,50,50,opcioes)
    this.imagem =loadImage("sprites/bird.png")
    }
    // funcoes / metodos
    desenha() {
    var posicao = this.corpo.position
    posicao.x = mouseX 
    posicao.y = mouseY
   super.desenha();
    }
  }
  
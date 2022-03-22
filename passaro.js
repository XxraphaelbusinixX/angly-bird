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
    this.imagemFumaca=loadImage("sprites/smoke.png")
this.trajetoria = []
  }
    // funcoes / metodos
    desenha() {
      if (estado === "the world") {
        var posicao = [this.corpo.position.x,this.corpo.position.y]
        this.trajetoria.push(posicao)
      }
    
  
      for (var index = 0; index < this.trajetoria.length; index++) {
      image(this.imagemFumaca,this.trajetoria[index][0],this.trajetoria[index][1])
        
      }
   super.desenha();
    }
  }
  
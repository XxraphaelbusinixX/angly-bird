class Base {
    // propriedades
    constructor(x, y, largura, altura, opcioes) {
      this.corpo = Bodies.rectangle(x, y, largura, altura,opcioes);
      this.largura = largura;
      this.altura = altura;
      World.add(mundo, this.corpo);
      this.imagem =loadImage("sprites/base.png")
    }
  
    // funcoes / metodos
    desenha() {
    var posicao = this.corpo.position
    var angulo=this.corpo.angle
    push()
    translate(posicao.x,posicao.y)
    rotate(angulo)
      imageMode(CENTER);
      image(this.imagem,0,0,this.largura,this.altura);
      pop()
    }
  }
  
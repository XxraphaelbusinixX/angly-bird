class Chao{
constructor(x ,y ,largura, altura){
    var opcoes = {
        isStatic: true,
      };
    
      this.corpo = Bodies.rectangle(x, y, largura, altura, opcoes);
      this.altura = altura;
      this.largura = largura;
      this.imagem = loadImage("sprites/base.png")
      World.add(mundo, this.corpo);
}

desenha(){
    push()
    imageMode(CENTER);
    image(this.imagem,this.corpo.position.x, this.corpo.position.y, this.largura, this.altura);
    pop()
}
}
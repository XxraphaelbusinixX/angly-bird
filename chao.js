class Chao{
constructor(x ,y ,largura, altura){
    var opcoes = {
        isStatic: true,
      };
    
      this.corpo = Bodies.rectangle(x, y, largura, altura, opcoes);
      this.altura = altura;
      this.largura = largura;
      World.add(mundo, this.corpo);
}

desenha(){
    fill("brown");
    rectMode(CENTER);
    rect(this.corpo.position.x, this.corpo.position.y, this.largura, this.altura);
}
}
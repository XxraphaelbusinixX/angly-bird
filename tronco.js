class Tronco extends Base {
    // propriedades
    constructor(x, y, altura,angulo) {
    var opcioes = {
    restitution:0.8,
    friction:1.5,
    density:1.0
    }
    super(x,y,20,altura,opcioes)
      
      Matter.Body.setAngle(this.corpo,angulo)
      this.imagem =loadImage("sprites/wood2.png")
    }
  
  
  }
  
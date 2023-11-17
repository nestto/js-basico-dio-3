class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "guerreiro":
        ataque = "usou a espada";
        break;
      case "mago":
        ataque = "usou a magia";
        break;
      case "monge":
        ataque = "usou as artes marciais";
        break;
      case "ninja":
        ataque = "usou a shuriken";
        break;
    
      default:
        ataque = "atacou";
    }
    console.log(`O ${this.tipo} ${ataque}!`);
  }
}

let heroi1 = new heroi("Guts", 25, "guerreiro");
let heroi2 = new heroi("Gandalf", 30, "mago");

heroi1.atacar();
heroi2.atacar();
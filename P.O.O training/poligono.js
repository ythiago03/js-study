class Poligono{
    constructor(altura, largura){
        this.altura = altura;// basicamente diz 'esse objeto recebe a altura', o this nesse caso se refere ao objeto
        this.largura = largura;
    }

    get area(){//método que invoca a função
        return this.#calcularArea() 
    }

    #calcularArea(){//função para retornar a area(a #hash faz que a função não fique visível fora da class)
        return this.altura * this.largura
    }
}

let poligono = new Poligono(50, 60)//recebe o objeto poligono
console.log(poligono);
console.log(poligono.area);//executando desta maneira, acessamos o método .area da class, e recebemos a area do objeto poligono
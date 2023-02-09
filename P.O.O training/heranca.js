 //Objetos podem herdar propriedades de outros, 

 class Veiculo{
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
 }

class Moto extends Veiculo{
    constructor(){
        super()//puxar atributos do método pai, no caso a class Veiculo
        this.rodas = 2    
    }
}
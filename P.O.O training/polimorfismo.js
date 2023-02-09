class Atleta{
    peso;
    categoria;

    constructor(peso){
        this.peso = peso;
    }

    definirCategoria(){
        if(this.peso <= 50){
            this.categoria = 'infantil'
        }else if(this.peso <= 60){
            this.categoria = 'juvenil'
        }else{
            this.categoria = 'adulto'
        }
    }
}

class Lutador extends Atleta{//essa classe herda atributos da classe pai, porém ela reescreve o método definirCategoria 
    constructor(peso){
        super(peso)
    }

    definirCategoria(){
        if(this.peso <= 55){
            this.categoria = 'pluma'
        }else if(this.peso <= 65){
            this.categoria = 'leve'
        }else if(this.peso <= 75){
            this.categoria = 'meio-leve'
        }else{
            this.categoria = 'pesado'
        }
    }
}
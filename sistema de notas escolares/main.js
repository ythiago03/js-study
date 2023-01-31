/* 
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89  - B
* entre 70 - 79  - C
* entre 60 - 69  - D
* abaixo de 60 - F

*/

const score = 59;

const calcScore = (score) => {
    if(score >= 90){
        console.log('Sua nota foi - A');
        return;
    }

    if(score >= 80 && score <= 89){
        console.log('Sua nota foi - B');
        return;
    }

    if(score >= 70 && score <= 79){
        console.log('Sua nota foi - C');
        return;
    }

    if(score >= 60 && score <= 69){
        console.log('Sua nota foi - D');
        return;
    }

    console.log('Sua nota foi - F');
}

calcScore(score)
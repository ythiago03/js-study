// functions

function makeJuice(fruit1, fruit2){//<= parameters
    let juice = fruit1 + fruit2
    return juice
}

//console.log(makeJuice('apple', 'orange'));//<= arguments 


let person = 'Thiago'

function changePerson(person){//caso remova 'person' dos argumentos, a variável pessoa muda para marcos fora do escopo 
    person = 'Marcos'
    return person
}

console.log(person);
console.log(changePerson());
console.log(person);



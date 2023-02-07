/* Loop while, verifica a condição lógica e depois executa o código*/

let numb = 0

while(numb < 10){
    console.log(`Número atual: ${numb}`);
    numb++
}

/* Loop do while, executa primeiro e depois verifica a condição*/
let numb2 = 0

do{
    console.log(`Número atual 2: ${numb2}`);
    numb2++
}while(numb2 < 5)

/* For, cria uma variável, a condição e o incremento
    break - para a execusão do loop
    continue - pula a execusão atual*/

for(let i = 1; i <= 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}

/* For of */

const fruits = ['apple', 'orange', 'strawberry']

for(let fruit of fruits){//basicamente ele diz "pegue uma fruta do array fruits"
    console.log(fruit);//na primeira vez mostra apple, na segunda orange e assim vai
}

/* For in */

const person = {
    name: 'John',
    age: 20,
    weight: 58.9
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}
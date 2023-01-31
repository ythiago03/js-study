/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    {
        receitas: [],
        despesas: [],
    }
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia esta com o saldo negativo ou positivo, seguido do valor do saldo
*/

const family = {
    receips: [ 500, 100, 50 ],
    expenses: [ 100, 25, 35, 200, ],
}

const calcBalance = ({receips, expenses}) => {
    let receipe = receips.reduce((acc, cur) => acc + cur, 0)
    let expense = expenses.reduce((acc, cur) => acc + cur, 0)
    
    let balance = receipe - expense;

    if(balance < 0){
        console.log('Seu saldo está negativo! | Saldo:', balance);
        return;
    }

    console.log('Seu saldo está positivo! | Saldo:', balance);
}
calcBalance(family);
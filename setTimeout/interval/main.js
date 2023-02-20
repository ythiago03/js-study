
//setTimeout

setTimeout(function () {
    console.log('ola');
},1 * 1000) //seTimeout recebe por padrão 2 argumentos, o primeiro é a função a ser executada e o segundo é o tempo para executar a função, nesse caso ele irá executar a função após 1 segundo.

//=========================================================================================

//setInterval

let time = 0

const addTime = () => {
    time++
    console.log(time);   
}

 
 let myCronometer = setInterval(addTime, 1000)//setInterval funciona como um loop, também recebe 2 argumentos, o primeiro é a função a ser executada e o segundo é o tempo para executar a função, mas do contrário do timeOut, ele continua executando infinitamente.

const oneMinute = () => {
        setTimeout(function () {
            clearInterval(myCronometer)//clearInterval irá parar o setInterval passado como parâmetro
        }, 
        60 * 1000)
}//Basicamente essa função irá parar o set interval em 60 segundos

oneMinute()
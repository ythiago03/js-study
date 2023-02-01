/*
 
Crie uma função que receba uma string em ceusius ou fahrenheit e que faça a conversão e uma para a outra

*/ 

let temperature = '30F'

const toCelcius = (temperature) => {
    let degree = (temperature - 32) * 5/9
    console.log(`Temperatura em Ceusius: ${degree}`);
}

const toFahrenheit = (temperature) => {
    let degree = (temperature * 9/5) + 32
    console.log(`Temperatura em Fahrenhei: ${degree}`);
}

const convertTemperature = (temperature) => {
    let degreeLowerCase = temperature.toLowerCase()
    let itsCeusius = degreeLowerCase.endsWith('c')
    
    if(itsCeusius){
        let degree  = +degreeLowerCase.replace('c', '')
        toFahrenheit(degree);
        return;
    }

    let degree  = +degreeLowerCase.replace('f', '')
    toCelcius(degree)
    
}

convertTemperature(temperature)
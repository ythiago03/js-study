const promessa = new Promise((resolve, reject) => {
	return resolve('tudo ok')//fluxo ok
});

const promessa2 = new Promise((resolve, reject) => {
	return reject('erro')//fluxo que algo deu errado
});

promessa.then(result => console.log(result))// o result basicamente recebe o que foi 
//retornado na promise, no caso a string 'tudo ok'

promessa2
.then(result => console.log(result))//.then é o caminho certo da promise,ele será executado quando uma promise retornar resolve
.catch(err => console.log(err))//.catch é o caminho de erro da promise,
//ele será executado quando uma promise retornar reject
.finally(() => console.log('finalizado'))//.finally executará no final da promise, tanto quando for retornado resolve, quanto resejct
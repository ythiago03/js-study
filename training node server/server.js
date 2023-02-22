const http = require('http')
const server = http.createServer() 

server.on('request', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })

    if(request.url === '/products'){
        response.end(
            JSON.stringify({
                message: 'Retorno da rota PRODUCTS'
            })
        );
    }

    if(request.url === '/card'){
        response.end(
            JSON.stringify({
                message: 'Retorno da rota CARDS'
            })
        );
    }

    if(request.url != '/card' && request.url != '/products'){
        response.end(
            JSON.stringify({
                message: 'ERROR 404!'
            })
        );
    }

})
.listen('4001', () => console.log('Server rodando na porta 4001.'))
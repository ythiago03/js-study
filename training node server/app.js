const express = require('express')
const { randomUUID } = require('crypto')

const app = express();

app.use(express.json());

const products = [];

/*
.post => inserir um dado
.get => buscar um/mais dado
.put => alterar um dado
.delete => remover um dado
*/ 

app.post('/products', (req, res) => {
    // Nome e preço 
    const {name, price} = req.body;

    const product = {
        name,
        price,
        id: randomUUID(),
    }

    products.push(product)

    return res.json(product)
})

app.get('/products', (req, res) => {
    return res.json(products);
})

app.listen('4002', () => {
    console.log('Server rodando na porta 4002');
})
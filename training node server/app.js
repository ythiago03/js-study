const express = require('express')
const { randomUUID } = require('crypto')
const fs = require('fs')

const app = express();

app.use(express.json());

let products = [];

fs.readFile('products.json', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        products = JSON.parse(data)
    }
})

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

    productFile()

    return res.json(product)
})

app.get('/products', (req, res) => {
    return res.json(products);
})

app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === id)
    return res.json(product)
})

app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const {name, price} = req.body;

    const productIndex = products.findIndex(product => product.id === id)
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }

    productFile()

    return res.json({message: 'Produto alterado com sucesso'})
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex(product => product.id === id)
    products.splice(productIndex, 1)

    productFile()
    return res.json({message: 'Produto deletado com sucesso'})
})

const productFile = () => {
    fs.writeFile('products.json',JSON.stringify(products), (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('Produto inserido');
        }

    })
}

app.listen('4002', () => {
    console.log('Server rodando na porta 4002');
})  


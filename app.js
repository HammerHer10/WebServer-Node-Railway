require('dotenv').config();
const hbs = require('hbs');

const express = require('express')
const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// serevir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Hammer Hernandez',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Hammer Hernandez',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Hammer Hernandez',
        titulo: 'Curso de Node'
    });
})

app.get('*', (req, res) => {
    res.send('404 | Page Not Found')
})

app.listen(port, () => {
    console.log('Escuchando en http://localhost:',port)
})
const express = require('express');
const app = express();
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());
const pokemon = require('./models/pokemon')


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon app!</h1>');
});
app.get('/pokemon', (req, res) =>{
    res.render('Index.jsx', {pokemon})
})
app.get('/pokemon/:id', (req, res) =>{
    res.render('Show.jsx', {mon : pokemon[req.params.id]});
})
app.listen(3000, () =>{
    console.log('listening')
})

const express = require('express');
const app = express();
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());
const pokemon = require('./models/pokemon.js')


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon app!</h1>');
});
app.get('/pokemon', (req, res) =>{
    res.render('Index.jsx')
})
app.listen(3000, () =>{
    console.log('listening')
})

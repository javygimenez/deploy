import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Bienvenido a mi servidor!</h1>')
});
app.get('/home', (req, res)=>{
    res.send('<h1>Este es un servidor en Railway</h1>')
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server ok en puerto ${PORT}`)
});
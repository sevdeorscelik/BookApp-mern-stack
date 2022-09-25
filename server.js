import express from "express";
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/bookapi');

const app = express();
const port = 3459;

app.get('/', (req, res) => {
 res.send(`<h1>Book API</h1>`)
})

app.listen(port, () => {
    console.log(`listenin on port: http://localhost:${port}`);
})
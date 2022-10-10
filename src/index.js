//console.log('hola Mundo dany')
//const express = require('express')
import express from 'express';
//import ejs from 'ejs';
import {dirname, join} from 'path'

import {fileURLToPath} from 'url'

import indexRoutes  from './rutas/index.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))
//console.log(__dirname, '/wiews')//concatenamos directorios
console.log( join(__dirname, 'views'))


app.set('views',join(__dirname, 'views') )
app.set('view engine', 'ejs')
app.use(indexRoutes)
/*
app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
app.get('/contact', (req, res) => res.render('contact'))
*/

app.use(express.static(join(__dirname, 'public')))



app.listen(3000)
console.log('Server is listening on port', 3000)




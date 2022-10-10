import {Router} from 'express';





const router = Router();

router.get('/', (req, res) => res.render('index',{title: 'primer citio con node', x:30}))

router.get('/about', (req, res) => res.render('about',{title:'about de dany'}))

router.get('/contact', (req, res) => res.render('contact',{title:'contactos de dany'}))


export default router
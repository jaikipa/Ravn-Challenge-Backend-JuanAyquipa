const db = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("hola JC");

});

router.post('/new', async(req,res) =>{
    let id = req.body.id;
    let name = req.body.name;
    try {
        await db.User.create({
            id,
            name,
                
        });
        res.status(200).send("Usuario creado");
    } catch (error) {
        res.status(400).send("Nose pudo crear el usuario");  
    }

});

    router.get('/all', async (req,res) =>{
        try {
            let count = await db.User.findAll();
            res.status(200).send(count);
        } catch (error) {
            res.status(400).send('No se pudieron obtener los usuarios');
        }
    });

    router.get('/:id', async (req,res) =>{
        try {
            let id = req.params.id;
            let count = await db.User.findByPk(id);
            res.status(200).send(count);
        } catch (error) {
            res.status(400).send('No se pudieron obtener el usuario id');
        }
    });

module.exports = router;

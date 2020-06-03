let mongoose = require('mongoose');
let Pintores = require('../models/Pintores');

let PintoresController = {};

/*LISTAR*/
PintoresController.list = (req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(num:0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error:',err);
            }
            
            res.render(view:'../views/index', options:{
                pintores: pintor,
                 titulo: "Listado de pintores",
                year: new Date().getDate()
            });
        })
};

module.exports = PintoresController;

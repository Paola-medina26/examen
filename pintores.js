const mongoose = require('mongoose');
//crear un objeto Schema
let Schema = mongoose.Schema;
//Definir mi colección
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos la corriente'],
       
    },
   nacionalidad{
     type: String
   },
   pintura{
     type: String
   }
});

module.exports = mongoose.model(name:'Pintores',PintoresSchema);

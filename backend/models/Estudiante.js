const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Estudiante = new Schema({
   name: {
      type: String
   },
   grado: {
      type: String
   },
   grupo: {
      type: String
   },
   materia: {
      type: String
   },
   calificacion: {
      type: Number
   }
}, {
   collection: 'estudiantes'
})

module.exports = mongoose.model('Estudiante', Estudiante)
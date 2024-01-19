const express = require('express');
const router = express.Router();

//funcion flecha con dos parametros con req que es lo requerido y res que es la respuesta
/*router.get('/contacto', (req,res)=>{
    res.send('CONTACTO');
})
*/

//cuando accedamos a la raiz que nos muestre los datos
const conexion = require('./database/db'); 
router.get('/', (req,res)=>{
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error){
            throw error;
        }else{
            res.send(results);
        }
    })
})

//temos que exportarlo este enrutador como un modulo
module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../database');

//////////User CRUD//////////

//list Users
router.get('/api/get', (req, res) =>{
    const sqlSelect =  "SELECT * FROM user";
    db.query(sqlSelect, (err, result)=> { 
        res.json(result);
     });
});

//search user
router.post('/api/searchUser', (req, res) => {

    const userName = req.body.userName;
    console.log(userName);
    const sqlSelect =  `SELECT * FROM USER WHERE USERNAME = '${userName}'`;
    db.query(sqlSelect, (err, result)=> { 
        res.json(result);
     });
    
});

//insert user
router.post('/api/insert/user', (req, res) => {

    const userName = req.body.userName;
    const password = req.body.password;
    const active = req.body.active;
    
    const sqlInsert =  "INSERT INTO user (USERNAME,PASSWORD,ACTIVE) VALUES (?,?,?)";
    db.query(sqlInsert, [userName,password,active], (err, result)=> { if(err){res.status(200).send({Message: err});}else{res.status(200).send({Message: 'Usuario Ingresado Correctamente'});} })
});

//delete user
router.delete("/api/deleteUser:ID", (req, res) => {
    const id = req.params.ID;
    var resc = id.split("=");
    const sqlDelete = "DELETE FROM user WHERE ID = ?";

    db.query(sqlDelete, resc[1], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.status(200).send({Message: 'Usuario Eliminado Correctamente'});
        } 
    });
});

//update user
router.put('/api/updateUser/', (req, res) => {
    const userName = req.body.username;
    const password = req.body.password;
    const active   = req.body.active;
    const id       = req.body.id;
        
    const sqlUpdate =  "UPDATE user SET USERNAME = ?, PASSWORD = ?,ACTIVE = ?  WHERE ID = ?";
    db.query(sqlUpdate, [userName,password,active,id], (err, result) => { res.status(200).send({Message: 'Usuario Actualizado Correctamente'}); });
});

module.exports = router;
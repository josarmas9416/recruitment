const express = require('express');
const router = express.Router();
const db = require('../database');

//////////Contact CRUD//////////

//search contact by last name
router.post('/api/searchContact', (req, res) => {

    const lastName = req.body.lastName;
    console.log(lastName);
    const sqlSelect =  `SELECT * FROM CONTACT WHERE LAST_NAME = '${lastName}'`;
    db.query(sqlSelect, (err, result)=> { 
        res.json(result);
     });   
});

//insert contact
router.post('/api/insert/contact', (req, res) => {

    const active = req.body.active;
    const city = req.body.city;
    const country = req.body.country;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const email = req.body.email;
    const photo = req.body.photo;
    const mobile = req.body.mobile;
    const contract = req.body.contract;
    const state = req.body.state;
    const salary = req.body.salary;
    
    const sqlInsert =  "INSERT INTO contact (ACTIVE,CITY,COUNTRY,LAST_NAME,ADDRESS,EMAIL,PHOTO,MOBILE,CONTRACT,STATE,SALARY) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [active,city,country,lastName,address,email,photo,mobile,contract,state,salary], (err, result)=> { res.status(200).send({Message: 'Usuario Ingresado Correctamente'}); })
});


//delete contact by ID
router.delete("/api/deleteContact:ID", (req, res) => {
    const id = req.params.ID;
    var resc = id.split("=");
    const sqlDelete =  "DELETE from contact where ID = ?";

    db.query(sqlDelete, resc[1], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.status(200).send({Message: 'Contacto Eliminado Correctamente'});
        } 
    });
});

//update contact 
router.put('/api/updateContact', (req, res) => {
    const active = req.body.active;
    const city = req.body.city;
    const country = req.body.country;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const email = req.body.email;
    const photo = req.body.photo;
    const mobile = req.body.mobile;
    const contract = req.body.contract;
    const state = req.body.state;
    const salary = req.body.salary;
    const id = req.body.id;
        
    const sqlUpdate =  "UPDATE contact SET ACTIVE = ?,CITY = ?,COUNTRY = ?,LAST_NAME = ?,ADDRESS = ?,EMAIL = ?,PHOTO = ?,MOBILE = ?,CONTRACT = ?,STATE = ?,SALARY = ?  WHERE ID = ?";
    db.query(sqlUpdate, [active,city,country,lastName,address,email,photo,mobile,contract,state,salary,id], (err, result) => { res.status(200).send({Message: 'Contacto Actualizado Correctamente'}); });
});


module.exports = router;
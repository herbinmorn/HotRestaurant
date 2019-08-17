var inquirer = require('inquirer');
var express = require('express');
var path = require('path');
var app = express();
var PORT = 7000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tableReservation = [
    {
      name:'sally',
      phoneNumber:1234567,
      email:'sally@gmail.com',
      id: 001
    }
];

var waitlist = [
    {
      name:'Brian',
      phoneNumber:7654321,
      email:'brian@gmail.com',
      id: 006
    }
];
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'home.html'));
});

app.get('/view',function(req,res){
    res.sendFile(path.join(__dirname,'view.html'));
    //return res.json(tableReservation);
});

app.get('/make',function(req,res){
    res.sendFile(path.join(__dirname,'make.html'));
});

app.get('/api/tables',function(req,res){
    return res.json(tableReservation);
});

app.get('/api/waitlist',function(req,res){
    return res.json(waitlist);
});


app.listen(PORT,function(){
    console.log('App listening on PORT' + PORT);
});
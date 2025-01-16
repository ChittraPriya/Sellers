const port = 4000;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');


app.use(express.json());
app.use(cors());

//Database connection

mongoose.connect("mongodb+srv://akcpriya:Xs1qJQQc45x7qjKw@cluster0.7ln8d.mongodb.net/selling");

//API Creation



app.get("/",(req,res)=>{
    res.send("Express App is Running")
})


//Schema for User model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
})

// Register User

app.post('/signup',async (req,res) => {
    let check = await Users.findOne({email:req.body.email});
    if(check) {
        return res.status(400).json({success:false,errors:"existing user found with same email address"})
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_seller');
    res.json({success:true,token})
})
// Sellers Data
const sellers = [
    { id: 1, name:"Ajeeth Kumar" ,rating: 5, review:"Excellent seller!"},
    { id: 2, name:"Chittra Priya" ,rating: 4, review:"Quality seller!"},
    { id: 3, name:"Rajam" ,rating: 5, review:"Very Good service"},
    { id: 4, name:"Murugan" ,rating: 3, review:"Average Experience"},
    { id: 5, name:"Rithanya" ,rating: 3, review:"Growing,Need to Support"},
    { id: 6, name:"Priya" ,rating: 2, review:"Need to Improve"},
]
//User Login

app.post('/login',async (req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if(user) {

        
        const passCompare = req.body.password === user.password;
        if(passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_seller');
            res.json({success:true,token})            
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})


// Sellers List

app.get("/sellers",(req,res) => {
    res.json(sellers);
});


app.listen(port,(error)=>{
    if(!error){
        console.log("Server is Running on Port " +port)
    }
    else
    {
        console.log("Error: " + error)
    }
})
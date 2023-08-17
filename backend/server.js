const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 5000
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect('mongodb://127.0.0.1:27017/spotify').then(() => console.log("connected")).catch((error) => {
    console.log(error)
})


app.listen(PORT, () => {
    console.log("started")
})


const userSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    } 
    ,
    password: {
        type: String,
    },
  

})

const User = new mongoose.model("User", userSchema, "users")


app.post("/signup" , async(req , res)=>{
    console.log("in")
    const {name , email , pass} = req.body;
    const checkEmail = await User.findOne({email})

    if(checkEmail){
        return res.status(202).json({ response:"Email Already Exists"})
    }

    try{
        const user = new User({
            name ,
            email ,
            password : pass
        });

        await user.save();
        return res.status(200).json({response: user})
    }catch(e){
        console.log(e)
        return res.status(500).json({response:"Internal Server Error"})
    }

});

const express = require('express')
const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')
const mailer = require('nodemailer')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express()
const PORT = 5000
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var transporter = mailer.createTransport({
    service: "gmail",
    auth: {
        user: 'spotifyclone.project@gmail.com',
        pass: "zgfxugegizlvftqc"
    }
})





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
    sessionId: {
        type: String,
    }

})

const User = new mongoose.model("User", userSchema, "users")


app.post("/signup", async (req, res) => {

    const { name, email, pass } = req.body;

    const checkEmail = await User.findOne({ email })
    const plainPass = pass;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPass = bcrypt.hashSync(plainPass, salt);
    if (checkEmail) {
        return res.status(202).json({ response: "Email Already Exists" })
    }

    try {
        const session = uuidv4();
        const user = new User({
            name,
            email,
            password: hashedPass,
            sessionId: session
        });
        const newUser = user;

        await newUser.save();

        let mailopt = {
            from: "spotifyclone.project@gmail.com",
            to: email,
            subject: "Welcome To Spotify Clone",
            text: "Thank you for making an account on our clone !"
        };

        await transporter.sendMail(mailopt, function (error, info) {
            if (error) console.log(error)

            else console.log("Email sent " + info.response);
        })



        return res.status(200).json({ response: "Signed Up Successfully !", sessionId: session, user: newUser })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ response: "Internal Server Error" })
    }

});


app.post("/login", async (req, res) => {

    const { email, pass } = req.body;



    try {
    
        const userEmail = await User.findOne({ email: email });

        if (userEmail) {
            const match = await bcrypt.compare(pass, userEmail.password);

            if (match) {
          


                const session = uuidv4();
                return res.status(200).json({ response: "Logged in successfully", sessionId: session })

            } else {
                let mailopt = {
                    from: "spotifyclone.project@gmail.com",
                    to: email,
                    subject: "Welcome To Spotify Clone",
                    text: "Someone tried to log in your  account at " + new date() + " was it you ? if not secure <link>"
                };

                await transporter.sendMail(mailopt, function (error, info) {
                    if (error) console.log(error)
        
                    else console.log("Email sent " + info.response);
                })



                return res.status(202).json({ response: "Invalid Credentials" })
            }
        } else {
            return res.status(202).json({ response: "Invalid Credentials" });

        }

    } catch (e) {
  
        return res.status(500).json({ response: "Internal Server Error" })
    }

});


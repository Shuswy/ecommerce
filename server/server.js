const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const TestModel = require('./models/Test-model')
const UserModel = require('./models/UserModel')
const bcrypt = require('bcrypt')
const ShoeModel = require('./models/ShoeModel')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use(express.static('public'))

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({error: 'Neshto sa iba!'})
})

const mongoURL = 'mongodb://localhost:27017/Mike'

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDb si eba maikata:', err))

app.get('/', (req, res) => {
    res.send('Hello from the other side!')
})

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find()
        req.status(200).json(users)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

app.post('/users/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if(user == null) {
            return res.status(400).send('Cannot find user')
        }

        if(await bcrypt.compare(req.body.password, user.password)) {
            res.status(200).send('Success')
        } else {
            res.status(400).send('Wrong password')
        }
    } catch {
        res.status(500).send()
    }
})

app.post('/users', async (req, res) => {
    try {
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

app.get('/shoes', async (req, res) => {
    try {
        const shoes = await ShoeModel.find()
        res.status(200).json(shoes)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

app.post('/shoes', async (req, res) => {
    try {
        const newShoe = new ShoeModel(req.body)
        await newShoe.save()
        res.status(201).send('Success')
    } catch (error) {
        res.status(400).json({message: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening to port: ${PORT}`)
})
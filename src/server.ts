import express = require('express')

const app: express.Application = express();
import {todoRouter} from "./routes/todos";
import mongoose from 'mongoose'
import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({extended: true}))
app.use(todoRouter)

mongoose.connect('mongodb://localhost:27017/todo', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database')
})

app.get('/', function (req, res) {
    console.log(req.socket.remoteAddress)
    res.sendFile(__dirname + "/assets/index.html")
})

app.listen(3000, () => {
    console.log("App is listening on port 3000");
})

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var todos_1 = require("./routes/todos");
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(todos_1.todoRouter);
mongoose_1.default.connect('mongodb://localhost:27017/todo', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function () {
    console.log('connected to database');
});
app.get('/', function (req, res) {
    console.log(req.socket.remoteAddress);
    res.sendFile(__dirname + "/assets/index.html");
});
app.listen(3000, function () {
    console.log("App is listening on port 3000");
});

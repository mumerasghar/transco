"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var todoScheme = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
todoScheme.statics.build = function (attr) {
    return new Todo(attr);
};
var Todo = mongoose_1.default.model('Todo', todoScheme);
exports.Todo = Todo;

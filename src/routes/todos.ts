import express, {Request, Response} from 'express'
import {Todo} from "../models/todo";

const router = express.Router()

router.get('/api/todo', [], async (req: Request, res: Response) => {

    const todo = await Todo.find({})
    console.log("in api/todo")
    return res.status(200).send(todo)
})

router.post('/api/todo', async (req: Request, res: Response) => {

    console.log(req.body)
    const {title, description} = req.body;

    const todo = Todo.build({title, description})
    await todo.save()
    console.log(" Post in api/todo")
    return res.status(201).send(":heheh")
})

export {router as todoRouter}

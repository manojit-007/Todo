/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
//import hooks

export const TodoContext = createContext({
    // default values 
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) =>{},
    toggleComplete: (id) =>{},
})

export const useTodo = () => {
    return useContext(TodoContext) //export context
}

export const TodoProvider = TodoContext.Provider // provide 
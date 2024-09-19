import { createContext } from "react";
import { useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})


export const useTodo = ()=>{                // hook hai eh eh
    return useContext(TodoContext)          //context dena painda hai (... )
}

export const TodoProvider= TodoContext.Provider
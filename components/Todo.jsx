import { useEffect, useState } from "react"

const todoTaskList = [
    {
        userId: 0, 
        id:1,  
        title: "Primeira", 
        completed: false
    },
    {
        userId: 0, 
        id:2,  
        title: "Segunda", 
        completed: false
    }
]


export function Todo(){

    const[todoTaskList, setTodoTaskList] = useState([])

    useEffect(()=>{
        async function getTodoList(){
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            return await response.json()
        }

        getTodoList().then(task => setTodoTaskList(task))


    }, [])
    

    return (
        <div>
            <ul>
                {todoTaskList.map((task) =>{
                    return (
                        <li key={task.id}>
                            {task.title}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
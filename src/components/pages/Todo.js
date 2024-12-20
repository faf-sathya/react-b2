import React, { useState } from 'react'

function Todo() {

    let [task,setTask] = useState("")
    let [tasks,setTasks] = useState([])
    const{completed, setCompleted} = useState(true)
    function handleSubmit(event){
        event.preventDefault()
        if(task.trim()){
            setTasks([...tasks, {id:Date.now().toString(),name:task,completed:false}])
            setTask("")
        }
    };
   function toggleCompleted(id){
    setTasks(
      tasks.map((t) => t.id === id?{...t,completed}: t)
    )
   }

    const filterTasks =tasks.filter((t)=> completed|| !t.completed)
  return (  
    <div>
        <h1>Todo Application</h1>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Today's Task?" 
        value={task} onChange={(e) => setTask(e.target.value)}/><br />
        <button type='submit'>Add</button>
        </form>
        <button onclick={() => setCompleted(!completed)}>
          {completed ?"Hide":"Show"}
        </button>
        <ul>
      {
        filterTasks.map((t) => (
          <li key={t.id}>{t.name}
          <button onClick={() => toggleCompleted(t.id)}>

            {t.completed ?"Undo":"Completed"}
          </button>
          </li>
        )
        )
      }
        </ul>
    </div>
  )
}

export default Todo
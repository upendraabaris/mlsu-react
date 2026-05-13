import { useState } from "react";

const Todo = () => {

    const [task, setTask] = useState();

    const [tasks, setTasks] = useState([]);

    function AddTask() {
        if (task.trim() === '') {
            alert("Please enter some task");
            return;
        }
        setTasks([...tasks,task]);

        setTask("");
    }

    function deleteTasks(index){
        const updatedTasks = tasks.filter((item,i)=> i !== index)
        setTasks(updatedTasks);
    }

    
    return (
        <>
            <div className="">
                <h1 className="text-center text-5xl p-2">ToDo App</h1>
                <div className="flex flex-col justify-center p-4 gap-3">
                    <input type="text"
                    placeholder="enter task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)} 
                    className="p-4 border"/>
                <button onClick={AddTask} className="bg-blue-500 p-2 rounded-lg px-4">
                    Add Task
                </button>
                <div className="">
                    {
                        tasks.map((item, index) => {
                            return(
                            <>
                                <div key={index} className="flex justify-between border p-2 mt-2">
                                    <h1>{item}</h1>
                                <button onClick={()=>deleteTasks(index)} className="bg-red-500 text-white">
                                    Delete Task
                                </button>
                                </div>
                            </>
                            )
})
                    }
                </div>
                </div>

                
            </div>

        </>
    )
}

export default Todo;
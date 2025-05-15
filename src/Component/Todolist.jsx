import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todolist() {
    const [todolist, settodolist] = useState(() => {
        const storedTasks = localStorage.getItem("todolist");
        return storedTasks ? JSON.parse(storedTasks) : [];
      });
      
  const [todoinput, setinput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  function addtask() {  
    if (todoinput.trim() === "") {
      alert("Please enter a task");
      return;
    }
    if (editIndex !== null) {
      const updatedTasks = [...todolist];
      updatedTasks[editIndex] = todoinput;
      settodolist(updatedTasks);
      setinput("");
      setEditIndex(null);
      return;
    }  
    settodolist([...todolist, todoinput]);  

    setinput("");
  }
  function edittodo(indexedit, tasktext) {  
    setinput(tasktext);
    setEditIndex(indexedit);
  }
  function deletetodo(indexdelete) {    
    const updatedTasks = todolist.filter(
      (item, index) => index !== indexdelete
    );
    settodolist(updatedTasks);
   
  }
  useEffect(() => {
    
  }, [setinput]);
  useEffect(() => {   
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-4 p-6">
        Project 2 Todolisted
      </h1>

      <div className="max-w-md mx-auto p-4 mt-10 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          React Todo List
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={todoinput}
            onChange={(e) => setinput(e.target.value)}
            placeholder="Enter your task"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            onClick={addtask}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            {editIndex !== null ? "Update" : "Add Task"}         
          </button>
        </div>

        <div id="todotasklisted">
          <ul className="space-y-2">
            {todolist.map((task, index) => (
              <li
                key={index}
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 shadow-sm relative"
              >
                {task}
                <button
                  className="bg-transparent hover:bg-green-600 text-green-500 hover:text-white rounded-md absolute right-20 top-1/2 transform -translate-y-1/2 py-2 px-4 flex items-center space-x-2"
                  onClick={() => edittodo(index, task)}
                >
                  <FontAwesomeIcon icon={faEdit} className="h-5 w-5" />
                </button>

                <button
                  className="bg-transparent hover:bg-red-600 text-red-500 hover:text-white rounded-md absolute right-4 top-1/2 transform -translate-y-1/2 py-2 px-4 flex items-center space-x-2"
                  onClick={() => deletetodo(index)}
                >
                  <FontAwesomeIcon icon={faTrash} className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todolist;

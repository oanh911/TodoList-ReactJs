import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import './TodoList.css';

const initTodoList = [
    {
        title: "Todo 1",
        status: "In progress"
    },
    {
        title: "Todo 2",
        status: "In progress"
    },
    {
        title: "Todo 3",
        status: "Done"
    },
    {
        title: "Todo 4",
        status: "Done"
    },
    {
        title: "Todo 5",
        status: "Done"
    },
    {
        title: "Todo 6",
        status: "In progress"
    }
]

function TodoList(){
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState(initTodoList);
    const [editedTodo, setEditedTodo] = useState('');

    const getNewTodoTitle = (event) => {
        setNewTodo(event.target.value);
    }

    const getEditedTodoTitle = (event) => {
        setEditedTodo(event.target.value);
    }

    const addTodo = () => {
        if (newTodo){
            const newTodoList = [
                ...todoList,
                {
                    title: newTodo,
                    status: "In progress",
                }
            ];
            setTodoList(newTodoList);
        }
        setNewTodo('');
    }

    const updateTodo = (index) => {
        const newTodoList = [...todoList];
        if (newTodoList[index].status === "In progress"){
            newTodoList[index].status = "Done";
        }
        else {
            newTodoList[index].status = "In progress";
        }
        setTodoList(newTodoList);
    }

    const displayEditTodo = (index) => {
        const todoTitles = document.querySelectorAll('.todo-title');
        const todoActions = document.querySelectorAll('.todo-action');
        todoTitles[index].firstElementChild.style.display = "none";
        todoTitles[index].lastElementChild.style.display = "block";
        todoActions[index].firstElementChild.style.display = "none";
        todoActions[index].lastElementChild.style.display = "block";
    }

    const cancelEditTodo = (index) => {
        const todoTitles = document.querySelectorAll('.todo-title');
        const todoActions = document.querySelectorAll('.todo-action');
        todoTitles[index].firstElementChild.style.display = "block";
        todoTitles[index].lastElementChild.style.display = "none";
        todoActions[index].firstElementChild.style.display = "block";
        todoActions[index].lastElementChild.style.display = "none";
    }

    const editTodo = (index) => {
        const newTodoList = [...todoList];
        if (editedTodo){
            newTodoList[index].title = editedTodo;
        }
        setTodoList(newTodoList);
        cancelEditTodo(index);
    }

    const deleteTodo = (index) => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    return (
        <>
            <AddTodo title={newTodo} getNewTodoTitle={getNewTodoTitle} addTodo={addTodo} />

            <table className='todolist'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todoList.map((todo, index) => {
                return <Todo key={index} id={index} title={todo.title} status={todo.status}
                        updateTodo={updateTodo} displayEditTodo={displayEditTodo} editTodo={editTodo}
                        cancelEditTodo={cancelEditTodo} deleteTodo={deleteTodo} getEditedTodoTitle={getEditedTodoTitle} />;
                })}
            </tbody>
            </table>
        </>
    );
}

export default TodoList;
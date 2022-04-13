import { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import './TodoList.css';

const inProgressStatus = "In progress";
const doneStatus = "Done";
const initTodoList = [
    {
        title: "Todo 1",
        status: inProgressStatus
    },
    {
        title: "Todo 2",
        status: inProgressStatus
    },
    {
        title: "Todo 3",
        status: doneStatus
    },
    {
        title: "Todo 4",
        status: doneStatus
    },
    {
        title: "Todo 5",
        status: doneStatus
    },
    {
        title: "Todo 6",
        status: inProgressStatus
    }
]

function TodoList(){
    const [newTodo, setNewTodo] = useState('');
    const [todoList, setTodoList] = useState(initTodoList);
    const [editedTodo, setEditedTodo] = useState('');
    const [isEditDisplay, setIsEditDisplay] = useState(true);
    const [editTodoId, setEditTodoId] = useState(0);

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

    // const updateTodo = (index) => {
    //     const newTodoList = [...todoList];
    //     newTodoList[index].status === inProgressStatus ? newTodoList[index].status = doneStatus : newTodoList[index].status = inProgressStatus;
    //     setTodoList(newTodoList);
    // }

    //splice
    // const updateTodo = (index, title) => {
    //     const newTodoList = [...todoList];
    //     if (newTodoList[index].status === inProgressStatus){
    //         newTodoList.splice(index, 1, {
    //             title: title,
    //             status: doneStatus
    //         })
    //     }
    //     else {
    //         newTodoList.splice(index, 1, {
    //             title: title,
    //             status: inProgressStatus
    //         })
    //     }
        
    //     setTodoList(newTodoList);
    // }

    //map
    const updateTodo = (todoId) => {
        const newTodoList = [...todoList];
        newTodoList.map((newTodo, index) => {
            if (index === todoId){
                newTodo.status === inProgressStatus ? newTodo.status = doneStatus : newTodo.status = inProgressStatus;
            };
        })
        setTodoList(newTodoList);
    }

    const displayEditTodo = (todoId) => {
        setEditTodoId(todoId)
        setIsEditDisplay(false);
        //console.log(isEditDisplay);
    }

    const cancelEditTodo = () => {
        setIsEditDisplay(true);
        //console.log(isEditDisplay);
    }

    const editTodo = (todoId) => {
        const newTodoList = [...todoList];
        if (editedTodo){
            //newTodoList[index].title = editedTodo;
            newTodoList.map((newTodo, index) => {
                if (index === todoId && newTodo.status === inProgressStatus){
                    newTodo.title = editedTodo;
                };
            })
        }
        setTodoList(newTodoList);
        cancelEditTodo();
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
                    return <Todo key={index} id={index} title={todo.title} status={todo.status} isEditDisplay={isEditDisplay} editTodoId={editTodoId}
                        updateTodo={updateTodo} displayEditTodo={displayEditTodo} editTodo={editTodo}
                        cancelEditTodo={cancelEditTodo} deleteTodo={deleteTodo} getEditedTodoTitle={getEditedTodoTitle} />;
                })}
            </tbody>
            </table>
        </>
    );
}

export default TodoList;
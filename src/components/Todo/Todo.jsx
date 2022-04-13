import './Todo.css';


function Todo(todo){
    return (
        <tr>
            <td className='todo-id'>{todo.id + 1}</td>
            <td className='todo-title'>
                {(todo.editTodoId === todo.id) ?
                    (todo.isEditDisplay) ? <p>{todo.title}</p> : <input defaultValue={todo.title} onChange={todo.getEditedTodoTitle}></input>
                    :
                    <p>{todo.title}</p>
                }
            </td>
            <td className='todo-status'>{todo.status}</td>
            <td className='todo-action'>
                {(todo.editTodoId === todo.id) ?
                    (todo.isEditDisplay) ? 
                        <TodoAction id={todo.id} updateTodo={todo.updateTodo} displayEditTodo={todo.displayEditTodo} deleteTodo={todo.deleteTodo}/>
                        :
                        <EditTodoAction id={todo.id} editTodo={todo.editTodo} cancelEditTodo={todo.cancelEditTodo} />
                    :
                    <TodoAction id={todo.id} updateTodo={todo.updateTodo} displayEditTodo={todo.displayEditTodo} deleteTodo={todo.deleteTodo}/>
                }
            </td>
        </tr>
    );
}

function TodoAction(todo){
    return (
        <div>
            <button className='update-btn' onClick={() => {todo.updateTodo(todo.id)}}>Update</button>
            <button className='edit-btn' onClick={() => {todo.displayEditTodo(todo.id)}}>Edit</button>
            <button className='delete-btn' onClick={() => {todo.deleteTodo(todo.id)}}>Delete</button>
        </div>
    );
}

function EditTodoAction(todo){
    return (
        <div className='edit-todo-action'>
            <button className='update-edit-btn' onClick={() => {todo.editTodo(todo.id)}}>OK</button>
            <button className='cancel-edit-btn' onClick={todo.cancelEditTodo}>Cancel</button>
        </div>
    );
}

export default Todo;
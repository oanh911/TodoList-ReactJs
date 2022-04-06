import './Todo.css';


function Todo(todo){

    return (
        <tr>
            <td className='todo-id'>{todo.id + 1}</td>
            <td className='todo-title'>
                <p>{todo.title}</p>
                <input defaultValue={todo.title} onChange={todo.getEditedTodoTitle}></input>
            </td>
            <td className='todo-status'>{todo.status}</td>
            <td className='todo-action'>
                <div>
                    <button className='updateBtn' onClick={() => {todo.updateTodo(todo.id)}}>Update</button>
                    <button className='editBtn' onClick={() => todo.displayEditTodo(todo.id)}>Edit</button>
                    <button className='deleteBtn' onClick={() => {todo.deleteTodo(todo.id)}}>Delete</button>
                </div>

                <div className='edit-todo-action'>
                    <button className='updateEditBtn' onClick={() => {todo.editTodo(todo.id)}}>OK</button>
                    <button className='cancelEditBtn' onClick={() => {todo.cancelEditTodo(todo.id)}}>Cancel</button>
                </div>
            </td>
        </tr>
    );
}

export default Todo;
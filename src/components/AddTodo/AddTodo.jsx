import './AddTodo.css';

function AddTodo(newTodo){
    return (
        <div className="add-todo">
            <input placeholder="Enter title" value={newTodo.title} onChange={newTodo.getNewTodoTitle}></input>
            <button onClick={newTodo.addTodo}>Add</button>
        </div>
    );
}

export default AddTodo;
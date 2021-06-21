import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        let dup = false
        todos.forEach(t => {

            if (t.text == todo.text) {
                dup = true
                
            }
        })

        if(!todo.text || /^\s*$/.test(todo.text) || dup) {
            return;
        }
        
        const newTodos = [todo, ...todos];

        todo.time = Date().toLocaleString()

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        let dup = false
        todos.forEach(t => {
            if (t.text == newValue.text) {
                dup = true;
            }
        })
        console.log(dup)
        if(!newValue.text || /^\s*$/.test(newValue.text) || dup) {
            if (dup) {
                alert("Duplicate Name Found. Please Try Again.")
            }
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Create a To-do List!</h1>
            <h4>Add items in the box below</h4>
            <h4>Click on an item to mark as complete</h4>
            <h4>Delete/edit items via the right icons</h4>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos = {todos} 
                completeTodo = {completeTodo} 
                removeTodo = {removeTodo}
                updateTodo = {updateTodo}
            />
        </div>
    );
}

export default TodoList

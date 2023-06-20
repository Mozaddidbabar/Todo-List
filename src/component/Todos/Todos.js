import React from 'react';
import useTodos from '../../hooks/useTodos/useTodos';
import TodoItem from '../TodoItem/TodoItem';

const Todos = () => {
    const [todos, setTodos] = useTodos();
    return (
        <div>
            <h2>Todo</h2>
            <p>{todos.length}</p>
            <div className='grid gap-0 row justify-content-around m-2'>
                {
                    todos.map(todo => <TodoItem todo={todo} />)
                }
            </div>
        </div>
    );
};

export default Todos;
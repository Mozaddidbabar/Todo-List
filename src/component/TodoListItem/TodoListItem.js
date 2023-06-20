import React from 'react';
import './TodoListItem.css';
import useTodos from '../../hooks/useTodos/useTodos';
import { Link } from 'react-router-dom';

const TodoListItem = (props) => {
    const [todos, setTodos] = useTodos();
    // console.log(props);
    const { title, id, completed } = props.todo;
    const url = `/todo-list/${id}`;
    // const { handleMark } = props.handleMark;
    return (
        <div className='d-flex border-bottom p-2 align-items-center mark-btn'>
            <p style={{ width: '100px' }} className=''>{id}</p>
            <p style={{ width: '500px' }} className=''>{title}</p>
            <p style={{ width: '200px' }} className=''>{completed ? <span className='bg-success p-2 rounded-start-2'><small>Completed</small></span> : <span className='bg-danger p-2 rounded-end-2'><small>Not Completed</small></span>}</p>
            <button onClick={() => props.handleMark(id)} className=' rounded px-5'>Mark</button>
            <Link to={url} className=' rounded px-5'>View</Link>
        </div >
    );
};

export default TodoListItem;
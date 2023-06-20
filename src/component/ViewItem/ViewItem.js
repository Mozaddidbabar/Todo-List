import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ViewItem.css';

const ViewItem = (props) => {
    const [todo, setTodo] = useState([]);
    const { id } = useParams();

    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, [])
    return (
        <div className='ItemBox'>
            <div className='shadow-lg rounded'>
                <h2>ID: {todo.id}</h2>
                <h3>Title: {todo.title} </h3>
                <p>Status: {todo.completed ? "Completed" : "Not Completed"} </p>
                <Link to='/todo-list' className='px-5 py-2 bg-warning text-decoration-none text-black rounded '>Back</Link>
            </div>
        </div>
    );
};

export default ViewItem;
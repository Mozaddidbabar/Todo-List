import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img height='400px' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg" alt="" />
            <h4 className='mb-5'>Page Not Found</h4>
            <div className=''>
                <Link to='/todo-list' className='px-3 py-2 me-2 bg-warning text-decoration-none text-black rounded'>Back To Todo</Link>
                <Link to='/charts' className='px-3 py-2 bg-info text-decoration-none text-black rounded'>Back To Chart</Link>
            </div>
        </div>
    );
};

export default NotFound;
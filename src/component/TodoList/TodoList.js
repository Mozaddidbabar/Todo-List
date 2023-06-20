import useTodos from '../../hooks/useTodos/useTodos';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useTodos();

    const handleMark = id => {
        // console.log(id);

        const clickedTodo = todos.find(todo => todo.id === id)
        clickedTodo.completed = !clickedTodo.completed;
        // console.log(clickedTodo);
        setTodos([...todos]);
    }

    return (
        <div className='box shadow-lg'>
            <div className='d-flex border-bottom'>
                <h4 style={{ width: '100px' }} className=''>UserID</h4>
                <h4 style={{ width: '500px' }} className=''>Title</h4>
                <h4 style={{ width: '200px' }} className=''>Status</h4>
            </div>
            {
                todos.map(todo => <TodoListItem
                    key={todo.id}
                    todo={todo} handleMark={handleMark} />)
            }
        </div >
    );
}

export default TodoList;
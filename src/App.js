import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './component/Header/Header';
import TodoList from './component/TodoList/TodoList';
import ViewItem from './component/ViewItem/ViewItem';
import NotFound from './NotFound/NotFound';
import Chart from './component/Chart/Chart';
import Home from './component/Home/Home';

const router = createBrowserRouter([
  { path: '*', Component: Root },
])

function App() {
  return <RouterProvider router={router} />
}

function Root() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charts' element={<Chart />} />
        <Route path='/todo-list' element={<TodoList />} />
        <Route path='/todo-list/:id' element={<ViewItem />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

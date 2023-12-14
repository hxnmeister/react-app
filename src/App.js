import './App.css';
import Counter from './components/Counter/Counter';
import ToDoList from './components/ToDo/ToDoList';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() 
{
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  );
}

export default App;

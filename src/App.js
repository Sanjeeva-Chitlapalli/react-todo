import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import TodoList from './TodoList';

function App() {

    return ( <div className = "App" >
      <Routes>
          <Route path='/' element={<Login />}/>
          
          <Route path='/home' element={<Home />}/>
          <Route path='/todolist' element={<TodoList />}/>
          
        </Routes>
        <TodoList />
        </div>
    );
}

export default App;
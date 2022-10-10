import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './utilities/routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Projects from './Pages/Projects';
import Music from './Pages/MusicUpdated';
import Fun from './Pages/Fun';
import Email from './Pages/Email';
import HomePage from './Pages/HomePage';
import reportWebVitals from './reportWebVitals';



import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  { path: '/', element: <HomePage/>,},
  { path: '/Projects', element: <Projects /> },
  { path: '/Music', element: <Music /> },
  { path: '/Fun', element: <Fun /> },
  { path: '/Email', element: <Email /> },
    
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

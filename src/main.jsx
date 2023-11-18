import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import App from './App';
import Error from './components/Error';
import { createRoot } from 'react-dom/client';
// import Contact from './components/Contact';
import About from './components/About';
// import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />, // Set the default page to About for the home page
      },
      {
        path: '/About',
        element: <About />,
      },
    //   {
    //     path: '/Portfolio',
    //     element: <Portfolio />,
    //   },
    //   {
    //     path: '/Contact',
    //     element: <Contact />,
    //   },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

// Render the application using ReactDOM.createRoot
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

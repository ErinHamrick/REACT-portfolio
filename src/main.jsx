import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import Error from './components/Error';
import { createRoot } from 'react-dom/client';
import ContactPage from './pages/ContactPage';
import About from './components/About';
import ResumePage from './pages/ResumePage';
import FullResumePage from './pages/FullResumePage';
import PortfolioPage from './pages/PortfolioPage';
import HomePage from './pages/HomePage';

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
			  {
			    path: '/Portfolio',
			    element: <PortfolioPage />,
			  },
			{
				path: '/Contact',
				element: <ContactPage />,
			},
			{
				path: '/Resume',
				element: <ResumePage />,
			},
			{
				path: '/FullResume',
				element: <FullResumePage />,
			},
		],
	},
]);

// Render the application using  createRoot
createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);

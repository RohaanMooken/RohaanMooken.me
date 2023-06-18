import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
// import './index.css';
import Root from './routes/root/root';
import ErrorPage from './pages/error-page';
import Skills from './routes/skills/skills';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/skills",
        element: <Skills />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
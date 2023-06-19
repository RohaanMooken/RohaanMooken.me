import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Root from './routes/root/root';
import ErrorPage from './pages/error-page';
import Skills from './routes/skills/skills';
import Certifications from './routes/certifications/certifications';
import Projects from './routes/projects/projects';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/skills",
        element: <Skills />
    },
    {
        path: "/certifications",
        element: <Certifications />
    },
    {
        path: "/projects",
        element: <Projects />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
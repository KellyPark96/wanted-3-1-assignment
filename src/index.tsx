import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "pages/notfound/Notfound";
import Search from "pages/search/Search";
import Theme from "./styles/theme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Search />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/search",
                element: <Search />,
            }
        ]
    }
]);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
    </ThemeProvider>
);

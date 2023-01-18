import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
import { GlobalStyle } from './styles/GlobalStyles';
import { createRoutesFromElements, RouterProvider, Route, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import FilmsPage from './pages/films/FilmsPage';
import MainLayout from './layout/MainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<App />} />
      <Route element={<MainLayout/>}>
        <Route path='films' element={<FilmsPage />} />
      </Route>
    </Route>
  )
)

root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </>


  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

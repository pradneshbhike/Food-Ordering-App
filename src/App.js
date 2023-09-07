import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider , Link } from 'react-router-dom';
import {
  createBrowserRouter
} from "react-router-dom";

import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
// import Grocerry from './components/Grocerry';
import RestaurantPage from './components/RestaurantPage';
import UserContext from './utils/UserContext';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const AppComponent = () => {
  // const [ data , setData ] = useState([]);
  const [userName,setUserName] = useState();

  useEffect(()=>{
    const data = {name: "Pradnesh Bhike"};
    setUserName(data.name);
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName}}>
  <div className="appComponent">
      <Header/>
      <Outlet />
  </div>
  </UserContext.Provider>
  </Provider>
)}


const Grocerry = lazy(() => import('./components/Grocerry'));

const rout = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocerry",
        element: <Suspense><Grocerry /></Suspense>
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={rout}/>)

// export default AppComponent;

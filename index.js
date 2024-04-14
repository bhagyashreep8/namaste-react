import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header/header";
import Body from "./src/component/Body/index";
import Error from './src/component/Error';
import About from './src/component/About';
import Contact from "./src/component/Contact";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestrauntDetailsPage from "./src/component/Body/RestrauntDetailsPage";

/*
Header:
>>logo>> navBarItems

Body:
>>searchBar

>>restrauntContainer
    >>restrauntCard

Footer:
>>copyRight
>>Links
>>Address
>>Contacts  
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([{
  path:'/',
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<Body/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/restrauntDetails/:restrauntId',
      element:<RestrauntDetailsPage/>
    }
  ]
}])
// Creation of Header
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

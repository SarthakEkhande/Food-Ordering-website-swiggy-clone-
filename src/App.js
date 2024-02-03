import  { lazy, Suspense } from "react"
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"

import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
// import About from "./components/About"
import Contact from "./components/Contact"
import Restaurants from "./components/Restaurants"
import Error from "./components/Error"
import Restarantmenu from "./components/Restarantmenu"
//import Grocery from "./components/Grocery"
import UserClass from "./components/UserClass"


//chunking  : known as code splitting
//dynmamcally bundling
//beakdown our app in small logical chunks
// lazy loading
//on demand loading or dynamic loading

const Grocery = lazy(() => import("./components/Grocery"));
const About=lazy(()=> import("./components/About"));


const root=ReactDOM.createRoot(document.getElementById("root"));


const AppLayout=()=>{
    return(
        <div className="app">
      <Header />
     
      <Outlet/>
    
   
      


        {/* if(path=="about"){
            <About/>
        }
        <Body/>
        if(path=="about"){
            <Contact/>
        }
        if(path=="about"){
            <Restaurants/>
        } */}
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense><UserClass/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants",
                element:<Restaurants/>
            },
            {
                path:"/restaurantsmenu/:resid",
                element:<Restarantmenu/>
            } ,
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
            }          
        ],
        errorElement:<Error/>
    },
  
])




root.render(<RouterProvider router={appRouter}/>)


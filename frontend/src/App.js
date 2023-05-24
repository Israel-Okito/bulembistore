
import{createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import "./App.scss"
import Login from "./pages/Login/Login";
import Inscription from "./pages/Inscription/Inscription"
import Products from "./pages/Products/Products";
import Calendrier from "./pages/Calendrier/Calendrier";
import Compte from "./pages/Compte/Compte";
const Layout = () =>{
  return(
    <div className="app">
      <Navbar className="navbar"/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },

      {
        path:"/products/:id",
        element: <Products/>,
      },
      {
        path:"/product/:id",
        element: <Product/>,
      },
      {       
        path:'/login' ,
        element:<Login /> ,
      },
      {
        path:'/inscription' ,
        element:<Inscription />,
      },
      {
        path:'/calendrier' ,
        element:<Calendrier />,
      },
      {
        path:'/compte' ,
        element:<Compte />,
      
      }
      // {
      //   path:'/compte' ,
      //   element:<Protector Component={Compte}/>,
        
      //  },

    ],
    
  },
]);
function App() {
  return (
    <div>
      
       <RouterProvider router={router}/> 

     
    </div>
  );
}

export default App;

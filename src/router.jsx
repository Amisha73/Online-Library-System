import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './Pages/Home';
import Books from "./Pages/Books";
import AddBooks from "./Pages/AddBooks";
import BookDetail from "./Pages/BookDetail";
import Error from "./Pages/Error";
import BookPage from "./Components/BookPage";
const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/browsebook',
                element:<Books />
            },{
                path:'/addbooks',
                element:<AddBooks />
            },{
                path:'/book/:id',
                element:<BookDetail />
            },{
                path:'/books/:catergory',
                element:<BookPage />
            }
        ],
        errorElement:<Error />
    },
    
])

export default router;
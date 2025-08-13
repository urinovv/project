import './App.css';
import AppNavbar from "./components/AppNavbar";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/Login";
import About from "./screens/About";
import Shop from "./screens/Shop";
import {Routes, Route} from "react-router-dom";
import ProductPage from "./Products/ProductDetail";
import Blogs from "./screens/Blogs";
import Contact from "./screens/Contact";
import BlogPost1 from "./screen-components/BlogPost1";
import BlogPost2 from "./screen-components/BlogPost2";
import BlogPost3 from "./screen-components/BlogPost3";
import BlogPost4 from "./screen-components/BlogPost4";
import BlogPost5 from "./screen-components/BlogPost5";
import BlogPost6 from "./screen-components/BlogPost6";
import BlogPost7 from "./screen-components/BlogPost7";
import BlogPost8 from "./screen-components/BlogPost8";
import BlogPost9 from "./screen-components/BlogPost9";
import Checkout from "./screens/Checkout";
import Cart from "./screens/Cart";
import Register from "./screens/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favourites from "./screens/Favourites";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
    return (
        <div className="app">
            <AppNavbar/>
            <ScrollToTop/>
            <ScrollToTopBtn/>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route index element={<HomeScreen />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop/>}/>
                <Route path="/product-detail/:id" element={<ProductPage/>} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path={"blogs/5 Must-Have Gadgets for the Modern Home"} element={<BlogPost1/>}/>
                <Route path={"blogs/Eco-Friendly Innovations Making a Difference"} element={<BlogPost2/>}/>
                <Route path={"blogs/Top Apps and Tools for Remote Work"} element={<BlogPost3/>}/>
                <Route path={"blogs/Eco-Friendly Innovations Making a Difference(1)"} element={<BlogPost4/>}/>
                <Route path={"blogs/5 Must-Have Gadgets for the Modern Home(1)"} element={<BlogPost5/>}/>
                <Route path={"blogs/Top Apps and Tools for Remote Work(1)"} element={<BlogPost6/>}/>
                <Route path={"blogs/Top Apps and Tools for Remote Work(2)"} element={<BlogPost7/>}/>
                <Route path={"blogs/5 Must-Have Gadgets for the Modern Home(2)"} element={<BlogPost8/>}/>
                <Route path={"blogs/Eco-Friendly Innovations Making a Difference(2)"} element={<BlogPost9/>}/>
                <Route path={"checkout"} element={<Checkout />}/>
                <Route path={"cart"} element={<Cart />}/>
                <Route path={"favourites"} element={<Favourites />}/>
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </div>
    );
}

export default App;

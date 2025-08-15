import './App.css';
import AppNavbar from "./components/AppNavbar.js";
import HomeScreen from "./screens/HomeScreen.js";
import Login from "./pages/Login.js";
import About from "./screens/About.js";
import Shop from "./screens/Shop.js";
import {Routes, Route} from "react-router-dom";
import ProductPage from "./Products/ProductDetail.js";
import Blogs from "./screens/Blogs.js";
import Contact from "./screens/Contact.js";
import BlogPost1 from "./screen-components/BlogPost1.js";
import BlogPost2 from "./screen-components/BlogPost2.js";
import BlogPost3 from "./screen-components/BlogPost3.js";
import BlogPost4 from "./screen-components/BlogPost4.js";
import BlogPost5 from "./screen-components/BlogPost5.js";
import BlogPost6 from "./screen-components/BlogPost6.js";
import BlogPost7 from "./screen-components/BlogPost7.js";
import BlogPost8 from "./screen-components/BlogPost8.js";
import BlogPost9 from "./screen-components/BlogPost9.js";
import Checkout from "./screens/Checkout.js";
import Cart from "./screens/Cart.js";
import Register from "./pages/Register.js";
import {ToastContainer, toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Favourites from "./screens/Favourites.js";
import ScrollToTop from "./components/ScrollToTop.js";
import ScrollToTopBtn from "./components/ScrollToTopBtn.js";
import User from './pages/User.js';
import { UserProvider } from './context/UserContext.js';
import LogOut from './pages/LogOut.js';

import {useEffect, useState} from 'react';
import {auth} from './firebase.js';
import {onAuthStateChanged, signOut} from 'firebase/auth';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Add to cart funksiyasi
    const handleAddToCart = (productId) => {
        if (!user) {
            toast.error("Siz add to cart funksiyasidan foydalanish uchun login qilishingiz kerak!");
            return;
        }
        toast.success("Mahsulot savatga qo'shildi!");
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logout muvaffaqiyatli bo'ldi!");
        } catch (error) {
            toast.error("Logoutda xatolik yuz berdi!");
        }
    };

    return (
        <div className="app">
            <UserProvider>
                <AppNavbar user={user} onLogout={handleLogout}/>

                <ScrollToTop/>
                <ScrollToTopBtn/>

                <Routes>
                    <Route path="/user" element={<User/>}/>
                    <Route path={"/logout"} element={<LogOut/>}/>
                    <Route path="login" element={<Login toast={toast}/>}/>
                    <Route path="register" element={<Register toast={toast}/>}/>
                    <Route index element={<HomeScreen addToCart={handleAddToCart} user={user}/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="shop" element={<Shop addToCart={handleAddToCart} user={user}/>}/>
                    <Route path="/product-detail/:id" element={<ProductPage addToCart={handleAddToCart} user={user}/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path={"blogs/5 Must-Have Gadgets for the Modern Home"} element={<BlogPost1/>}/>
                    <Route path={"blogs/Eco-Friendly Innovations Making a Difference"} element={<BlogPost2/>}/>
                    <Route path={"blogs/Top Apps and Tools for Remote Work"} element={<BlogPost3/>}/>
                    <Route path={"blogs/Eco-Friendly Innovations Making a Difference(1)"} element={<BlogPost4/>}/>
                    <Route path={"blogs/5 Must-Have Gadgets for the Modern Home(1)"} element={<BlogPost5/>}/>
                    <Route path={"blogs/Top Apps and Tools for Remote Work(1)"} element={<BlogPost6/>}/>
                    <Route path={"blogs/Top Apps and Tools for Remote Work(2)"} element={<BlogPost7/>}/>
                    <Route path={"blogs/5 Must-Have Gadgets for the Modern Home(2)"} element={<BlogPost8/>}/>
                    <Route path={"blogs/Eco-Friendly Innovations Making a Difference(2)"} element={<BlogPost9/>}/>
                    <Route path={"checkout"} element={<Checkout/>}/>
                    <Route path={"cart"} element={<Cart addToCart={handleAddToCart} user={user}/>}/>
                    <Route path={"favourites"} element={<Favourites/>}/>
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
                    transition={Slide} // animatsiya qo'shildi
                />
            </UserProvider>
        </div>
    );
}

export default App;

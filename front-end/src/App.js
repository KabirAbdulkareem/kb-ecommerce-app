import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./container/Header"
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";





function App() {

  const bar = document.getElementById('bar');
  const close = document.getElementById('close')
  const nav = document.getElementById('navbar');

  if(bar){
      bar.addEventListener('click', ()=>{
          nav.classList.add('active')
      })
  }

  if(close){
      close.addEventListener('click', ()=>{
          nav.classList.remove('active')
      })
  }
  
  return (
    <>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


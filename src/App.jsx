import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/user/HomePage"
import AboutPage from "./pages/user/AboutPage"
import BlogPage from "./pages/user/BlogPage"
import BlogDetail from "./components/Blog/BlogDetail"
import ShopPage from "./pages/user/ShopPage"
import ContactPage from "./pages/user/ContactPage"
import DetailPage from "./pages/user/DetailPage"
import ChatbotGemini from "./components/ChatbotGemini"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFoundPage from "./pages/user/NotFoundPage"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />           
        <Route path="/blog" element={<BlogPage />} />           
        <Route path="/blog/:id" element={<BlogDetail />} />           
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ChatbotGemini />
      <Footer />
    </>
  );
}

export default App;

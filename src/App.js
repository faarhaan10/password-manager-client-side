import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './Components/Home/Home';
import Footer from "./Components/Shared/Footer";
import Navigation from "./Components/Shared/Navigation";
import NotFound from "./Components/Shared/NotFound";
import Passwords from './Components/Passwords/Passwords';
import Login from './Components/Authentication/Login';
import Loading from './Components/Shared/Loading';
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/passwords" element={<Passwords />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

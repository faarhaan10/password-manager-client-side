import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Navigation from "./Components/Shared/Navigation";
import NotFound from "./Components/Shared/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

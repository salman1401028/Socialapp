
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from './component/Contact'
import About from './component/About'
import Post from './component/Post/Post';
import Navbarr from './component/Navbarr';
import Login from './component/Login';
import Signup from './component/Signup';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbarr />
        <Routes>
          <Route path='/' element={<Post />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
        <h3></h3> 

      

      </div>
    </BrowserRouter>

  );
}

export default App;


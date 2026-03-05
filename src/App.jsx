import Message, { Navbar } from "./message";
import { Functional } from "./Component/Functional";
import './App.css';
import Hi from "./Component/classComp";
import Wellcome from "./Component/Wellcome";
import Fullname from "./Component/props";
import Subscribe from "./Component/state";
import EventFun from "./Component/EventFun";
import EventClass from "./Component/EventClass";
import EventBinding from "./Component/EventBinding";
import Forms from "./Component/forms";
import { BrowserRouter as Router, Routes, Route, Link  } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UseStatecounter from "./Component/Hooks/useState";
function App (){
return (
   <div className="App">
      <Router>
        <nav> 
            <ul>
                <li>
                    <Link to="/">Home</Link>
                   <Link to="/about">About</Link>
                 <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<h1>404 Not Found</h1>
            }/>
        </Routes>
      </Router>
      <UseStatecounter />
    {/* <Forms />
    <Message />
    <Navbar />
    <Functional />
    <Hi />
    <Wellcome />
    <Fullname  name="Henok " Age="20">
        <p>This is Henok's information.</p>
        <button>click me</button>
    </Fullname>
    <Fullname name="John " Age="30"/>
    <Fullname name="Jane " Age="28"/>
<Subscribe />
    <EventFun />
    <EventClass />
    <EventBinding /> */}
</div>
); 
}
export default App;
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
function App (){
return (
   <div className="App">
    {/* <Message /> */}
    {/* <Navbar /> */}
    {/* <Functional /> */}
    {/* <Hi /> */}
    {/* <Wellcome /> */}
    {/* <Fullname  name="Henok " Age="20">
        <p>This is Henok's information.</p>
        <button>click me</button>
    </Fullname>
    <Fullname name="John " Age="30"/>
    <Fullname name="Jane " Age="28"/> */}
{/* <Subscribe /> */}
    {/* <EventFun /> */}
    <EventClass />
    <EventBinding />
</div>
); 
}
export default App;
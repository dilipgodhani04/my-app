
import './App.css';
import Addfirst  from './Addfirst';
import {Route,Routes} from "react-router-dom";
import Code from './Code';


function App() {
  return (
    <>
    <Routes>
      <Route path="/code" element={<Code/>}/>
      <Route path="/addfirst" element={<Addfirst/>}/>
    </Routes>
    </>
 
  );
};

export default App;


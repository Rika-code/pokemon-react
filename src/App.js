import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import '../src/components/App.css';
import Home from "./page/Home"
import Pokemon from "./page/Pokemon"

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/Pokemon" element = {<Pokemon/>}/>
</Routes>



</BrowserRouter>
  );
}

export default App;

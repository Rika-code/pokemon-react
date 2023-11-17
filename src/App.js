import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import '../src/components/App.css';
import Home from "./page/Home"
import Pokemon from "../src/components/Pokemon"
import PokemonDetails from './page/PokemonDetails';
import TrainerDetails from './page/TrainersDetails';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path = "/" element = {<Home/>}/>
  <Route path = "/pokemon" element = {<Pokemon/>}/>
  <Route path ="/pokemon/:pokemonId/details" element = {<PokemonDetails/>}/>
  <Route path ="/trainers/:trainersid/details" element = {<TrainerDetails/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;

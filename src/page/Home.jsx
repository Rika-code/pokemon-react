import { Link } from "react-router-dom";
import Header from "../components/Header"
import Pokemon from "./Pokemon"

function Home () {
    return (
        <>
        <Header/>
        
      <Pokemon/>
        </>
    )
}

export default Home
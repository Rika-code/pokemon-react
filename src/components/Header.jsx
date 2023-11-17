import { Link } from "react-router-dom";
function Header () {
   return (
    <header class = "header">
        <img src ="https://assets.stickpng.com/images/612ce4761b9679000402af1c.png" class ="headerimg" alt ="logo pokémon"></img>
        <h1 class ="headerh1"> Pokémon c'est trop bien</h1>
        <nav class ="headernav">
            <ul class="headerul">
                <li>
                <Link to = "/">Home </Link>
                </li>
                <li> 
                <Link to ="/Pokemon"> Pokemons</Link>
                </li>
            </ul>
        </nav>
    </header>
   )
}
export default Header
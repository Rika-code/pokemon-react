import { Link } from "react-router-dom";
function Header () {
   return (
    <header class = "header">
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" class ="headerimg"></img>
        <h1 class ="headerh1"> Pokémon c'est trop bien</h1>
        <nav class ="headernav">
            <ul class="headerul">
                <li>
                <Link to = "/">Home </Link>
                </li>
                <li> 
                <Link to ="/Pokemon">Pokemons</Link>
                </li>
            </ul>
        </nav>
    </header>
   )
}
export default Header
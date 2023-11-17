import { Link, useParams } from "react-router-dom";
function Pokemon () {
    const pokemons = [
        {
          id: 1,
          name: 'Bulbizarre',
          types: ['poison', 'herbe'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          isInTeam: true,
        },
        {
          id: 2,
          name: 'Herbizzare',
          types: ['poison', 'herbe'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
          isInTeam: true,
        },
        {
          id: 3,
          name: 'Florizzard',
          types: ['poison', 'herbe'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
          isInTeam: false,
        },
        {
          id: 4,
          name: 'Salamèche',
          types: ['feu'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
          isInTeam: true,
        },
        {
          id: 5,
          name: 'Reptincel',
          types: ['feu'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
          isInTeam: false,
        },
        {
          id: 6,
          name: 'Dracaufeu',
          types: ['vol', 'feu'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
          isInTeam: true,
        },
        {
          id: 7,
          name: 'Carapuce',
          types: ['eau'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
          isInTeam: true,
        },
        {
          id: 8,
          name: 'Carabaffe',
          types: ['eau'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
          isInTeam: false,
        },
        {
          id: 9,
          name: 'Tortank',
          types: ['eau'],
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
          isInTeam: true,
        },
      ];

      const pokemonsInTeam = pokemons.filter((pokemon) => {
        return pokemon.isInTeam === true;
      });
 
  
      return(        
        <>
                <main className="pokemonsmain">
                  <h1>Moi et ma team on est dans le game!</h1>
                    {pokemons.map((pokemon) => {
                        return(
                          <Link to ={`/pokemon/${pokemon.id}/details`}>
                            <article> 
                              <p>{pokemon.name}</p>
                                <img className="pokemonsimg" src={pokemon.img} alt= "Image des pokemons"></img>
                            </article>
                            </Link>
                        )
                    })}
                </main>
        </>
    )
}



export default Pokemon
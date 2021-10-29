import React from 'react'
import PokedexInfo from './src/screens/PokedexInfo';

export default function App() {
    return (
        <PokedexInfo />
    );
}

/*class App extends React.Component{

    render() {
        return (
            <div>
                <Form />
            </div>
        );
    }
}

export default App;*/

/*export default function App () {

    const [pokemons, setPokemons, searchPokemon] = useState([])
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setPokemons(data.results)
        })
    }, [])


    return (
        <SafeAreaView>
            <FlatList
            data={pokemons}
            keyExtractor={(pokemon) => pokemon.name}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={PokemonShow}
            />
        </SafeAreaView>
    )
}




function PokemonShow(item) {

    const { name, url } = item.item

    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

    const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+pokemonNumber+'.png'

    const typepokemon = 'https://pokeapi.co/api/v2/pokemon/'+pokemonNumber

    console.log(typepokemon)

    return (
        <View style={{alignContent:'center', alignItems: 'center', padding: 20, }}>
            <Image style={{width: 100, height: 100}} source={{ uri: imageUrl }} />
            <Text>Nombre: {name}</Text>
        </View>
    )
}*/





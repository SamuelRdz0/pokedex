import React, { useState, useEffect, } from "react";
import styleSheet from './styles';
import { ScrollView, Text, View, Image } from "react-native";
import Screen from '../components/Screen/Screen'
import axios from 'axios';
import CONSTANTS from "../config/constants";
import PokemonDesc from "../components/PokemonDesc/index";
import COLORS from "../config/colors";

const PokedexInfo = () => {
    const [pokemons, setPokemons] = useState([]);
    const [[pokemon, pokemonDetail], setPokemon] = useState([]);
    const getPokemonsAsync = async () => {
        
        try {
            const response = await axios.get(`${CONSTANTS.BASE_API_URL}?limit=150`);
            setPokemons(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };
    
    const handlePressPokemon = (pokemon, pokemonDetail) => {
        setPokemon([pokemon, pokemonDetail])
        
        
        if(pokemonDetail.types[0].type.name === "grass"){
            console.log('green')
        }if(pokemonDetail.types[0].type.name === "fire"){
            console.log('red')
        }else {
        }
    }


    useEffect(() => {
        getPokemonsAsync();
    }, [])


    return (
        <Screen bgColor={COLORS.RED} >
        <View style={styleSheet.container}>  
       <View style={styleSheet.pokedexScreen} >
           <View style={styleSheet.IMG_ID}>
            {pokemon && (
                <View>
                   <Image source={{uri: pokemonDetail.sprites.front_default}} style={styleSheet.pokemonImg}/>
                </View>
            )}
            {pokemonDetail && (
                <Text style={styleSheet.Idpokemon}>{"ID: " + pokemonDetail.id}</Text>
            )}
            </View>
            <View style={styleSheet.abilities}>
            {pokemon && (
                <Text style={styleSheet.namePokemon}>{"Name: " + pokemon.name}</Text>
            )}
            {pokemonDetail && (
                <Text style={styleSheet.Pokemontype}>{"Type: " + pokemonDetail?.types[0].type.name}</Text>
            )}
            </View>
        </View>
        
        
        <ScrollView style={styleSheet.scrollView} contentContainerStyle={styleSheet.contentContainerStyle}>
            {pokemons.map((pokemon) => (
                <View key={pokemon.name} style={styleSheet.rowContainer}>
                <PokemonDesc onPressPokemon={handlePressPokemon} pokemon={pokemon} />
                </View>
           ))}
       </ScrollView>
        </View>
    </Screen>
    )
            }

export default PokedexInfo;
    
   //*<Screen bgColor={COLORS.RED}>

/*<View style={styleSheet.border}>
<View style={styleSheet.pokedexScreen}>
    <View style={styleSheet.imagScreen}>
    {pokemonDetail &&(
 <Text style={styleSheet.id}>{"ID: "+pokemonDetail?.id}</Text>
    )}
{pokemonDetail &&(
 <Image source={{uri: pokemonDetail?.sprites.front_default}} style={styleSheet.imagPokemon} />
    )}
    </View>
    <View style={styleSheet.abilities}>
    {pokemon &&(
 <Text style={styleSheet.namePokemon}>{pokemon.name}</Text>
    )}
    
    {pokemonDetail &&(
 <Text style={styleSheet.typePokemon}  >{pokemonDetail?.types[0].type.name}</Text>
    )}
    </View>
</View>


<ScrollView key={pokemons.name} style={styleSheet.muestaPokemon}>
{pokemons.map((pokemon) =>(
    <View key={pokemon.name} style={styleSheet.rowContainer}>
    <PokemonDesc onPressPokemon={handlePressPokemon} pokemon={pokemon}/>
  </View>   
  ))}   

</ScrollView>
</View>
 </Screen>*/
    /*);
    
};*/
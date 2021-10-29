import React, { useState, useEffect, } from "react";
import styleSheet from './styles';
import { ScrollView, Text, View } from "react-native";
import Screen from '../components/Screen'
import axios from 'axios';
import CONSTANTS from "../config/constants";
import Poketype from "../components/Pokemon/PokeType";

const PokedexInfo = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        try {
            const response = await axios.get(`${CONSTANTS.BASE_API_URL}?limit=15`);
            setPokemons(response.data.results);
        } catch (error) {
            console.error(error);
        }
    }    


    useEffect(() => {
        getPokemons();
    }, [])

    return (
    <Screen>
        <View style={styleSheet.kunno}><Text>Pokedex</Text></View>
        <ScrollView>
            {pokemons.map((pokemon) => (
                <Poketype pokemon={pokemon} />
            ))}
        </ScrollView>
    </Screen>
    );
    
}

export default PokedexInfo;
    ///sirve---------------------------------------------------------------
    /*const [pokemones, setPokemones ] = useState([])
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setPokemones(data.results)
        })
    }, [])


    return (
        <SafeAreaView>
            <FlatList
            data={pokemones}
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

    return (
        <Screen>
        <View style={styleSheet.kunno}><Text>Pokedex</Text></View>
        <ScrollView>
             
            <View style={styleSheet.asta}>
            <Image style={{width: 100, height: 100}} source={{ uri: imageUrl }} />
                <Text> Nombre: {name}</Text>
                <Text> Tipo: </Text>
            </View>
        </ScrollView>
    </Screen>*/

    ////////////////sirve----------------------------------------------------
        


    
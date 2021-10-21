import React, { useState, useEffect } from "react";
import styleSheet from './styles';
import { ScrollView, Text, View } from "react-native";
import Screen from '../components/Screen'
import axios from 'axios';
import CONSTANTS from "../config/constants";


const PokedexInfo = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        try {
            const response = await axios.get(`${CONSTANTS.BASE_API_URL}?limit=150`);
            setPokemons(response.data.results);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPokemons();
    }, [])

    getPokemons();

    return (
    <Screen>
        <View style={styleSheet.kunno}><Text>Pokemon</Text></View>
        <ScrollView>
            {pokemons.map(pokemon => 
            <View style={styleSheet.asta}>
                <Text>{pokemon.name}</Text>
            </View>)}
        </ScrollView>
    </Screen>
    );
}

    export default PokedexInfo;

    //listo ;)
import React, { useEffect, useState } from "react";
import styleSheet from '../../screens/styles';
import { View, Text, Image } from "react-native";
import axios from 'axios';
import CONSTANTS from "../../config/constants";


const Poketype = (props) => {
    const {pokemon} = props;
    const [PokemonType, setPokemonType ] = useState (null);


    const getPokemonType = async () => {
        try {
            const response = await axios.get(`${CONSTANTS.BASE_API_URL}/${pokemon.name}`);
            setPokemonType(response.data);
            console.log(response.data.sprites.front_default);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPokemonType();
    }, []);

    return (
        <View  key={pokemon.name} style={styleSheet.asta}>
                <Text> Nombre:{pokemon.name}</Text>
                <Text> Tipo: {PokemonType?.types[0].type?.name} </Text>
                
            </View>
    )
};


export default Poketype;
import React, { useEffect, useState } from "react";
import styleSheet from './styles';
import { Text, View, TouchableOpacity } from "react-native";
import axios from 'axios';
import CONSTANTS from "../../config/constants";

const PokemonDesc = (props) => {
    const {pokemon, onPressPokemon} = props;
    const [pokemonDetail, setPokemonDetail ] = useState (null);

    const getPokemonDetail = async () => {
        try {
            const response = await axios.get(`${CONSTANTS.BASE_API_URL}/${pokemon.name}`);
            setPokemonDetail(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePressPokemon = () => {
        onPressPokemon(pokemon, pokemonDetail);
    }

    useEffect(() => {
        getPokemonDetail();
    }, []);
    
    const getBackgroundColor = (color) => {
        switch(color){
            case "grass":
                return styleSheet.grass
            case "fire":
                return styleSheet.red
            default:
                return styleSheet.grass
        }
    }

    return(
           <TouchableOpacity onPress={handlePressPokemon} style={styleSheet.row}>
               <Text style={styleSheet.pokemonName}>{pokemon.name}</Text>
               <Text>{'       '}</Text>
               <View className="testing" style={[styleSheet.type, getBackgroundColor(pokemonDetail?.types[0].type.name)]}><Text style={styleSheet.typeName}>{pokemonDetail?.types[0].type.name}</Text></View>
           </TouchableOpacity>
    )
          
    
};


export default PokemonDesc;
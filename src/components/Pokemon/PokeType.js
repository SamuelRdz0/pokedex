import React, { useEffect, useState, Component } from "react";
import styleSheet from '../../screens/styles';
import { View, Text, Image, ScrollView } from "react-native";
import axios from 'axios';
import CONSTANTS from "../../config/constants";


const Poketype = (props) => {
    const {pokemon} = props;
    const [PokemonType, setPokemonType ] = useState (null);


    const getPokemonType = async () => {
        try {
            const response = await axios.get(`${CONSTANTS.BASE_API_URL}/${pokemon.name}`);
            setPokemonType(response.data);
            /*console.log(response.data.sprites.front_default);
            <Text> imgaen: {PokemonType?.sprites?.front_default}</Text>*/
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPokemonType();
    }, []);


    return(

        <View  key={pokemon.name} style={styleSheet.asta}>
                <Image style={{ width: 150, height: 150 }} source={PokemonType?.sprites?.front_default}/>
                <Text> ID: {PokemonType?.id}</Text>
                    <Text> Nombre:{pokemon.name}</Text>
                <Text> Tipo: {PokemonType?.types[0].type?.name} </Text>           
            </View>
    )
          
    
};

export default Poketype;
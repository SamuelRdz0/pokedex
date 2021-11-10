import React, { useEffect, useState } from "react";
import styleSheet from '../../screens/styles';
import { View, Text, Image, TouchableOpacity, Alert, ImageBackground } from "react-native";
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

     /*const onPressPokemon = () => {
        alert (pokemon.name), 
        alert (PokemonType?.types[0].type?.name);
        
    }*/

    useEffect(() => {
        getPokemonType();
    }, []);

    const [selectpo,setpok] = useState(false);
    const setpokemonTodo = async() => {
        setpok(!selectpo)
    }



    return(
        
            ////<TouchableOpacity 
              //  onPress={() => Alert.alert("Nombre: " + pokemon.name + "              " + "Tipo: " + PokemonType?.types[0].type?.name)}
         //   >
            //    <View  key={pokemon.name} style={styleSheet.asta}>
            //    <Image style={{ width: 150, height: 150 }} source={{uri: PokemonType?.sprites?.front_default}}/>
            //   <Text> ID: {PokemonType?.id}</Text>
            //        <Text> Nombre:{pokemon.name}</Text>
            //    <Text> Tipo: {PokemonType?.types[0].type?.name} </Text>           
          //  </View>
           // </TouchableOpacity>
           <View key={pokemon.name}>

            <Image style={{ width:150,
        height:100,
        alignContent: 'center',
        margin: 50,
        paddingLeft: 150,
         }} source={{uri: (selectpo ? PokemonType?.sprites?.front_default : "")}}/>

           <View key={pokemon.name} style={styleSheet.asta}>

               

               <Text>{selectpo? "Nombre: " + pokemon.name +"\n"+"Tipo: " +PokemonType?.types[0].type?.name +"\n"+ "ID: "+PokemonType?.id : ""}</Text>

           <TouchableOpacity 
           onPress={setpokemonTodo}>

                <Image source={require('../../../assets/pokebola.png')} style={{width: 50, height: 50}}/>
               <Text>
                   
                   {pokemon.name}
               </Text>
           </TouchableOpacity>
            </View> 
            </View>
    )
          
    
};


export default Poketype;
import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../config/colors";

const {height, width} = Dimensions.get('window');

const styles = {
    container: {
        flex:1,
        borderColor: COLORS.BLACK,
        borderWidth: 12,
        borderRadius: 8,
        margin: 20,   
    },
    rowContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: COLORS.TRANSPARENT,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    pokemonImg: {
        height: 100,
        width: 100,
    },
    row: {
        padding: 20,
        paddingHorizontal: 10,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'blue',
    },
    contentContainerStyle: {
        backgroundColor: COLORS.LIGHT_BLUE,
        flex: 1,
    },
    scrollView: {
        backgroundColor: COLORS.LIGHT_BLUE,
    },
    pokedexScreen: {
        height: height * 0.4,
        backgroundColor: COLORS.LIGHT_BLUE,
    },
    Idpokemon: {
        margin: 10
    },
    namePokemon: {
        margin: 10
    },
    Pokemontype: {
        margin: 10
    },
    IMG_ID: {

    },
    abilities: {

    }
};


const styleSheet = StyleSheet.create(styles);

export default styleSheet;

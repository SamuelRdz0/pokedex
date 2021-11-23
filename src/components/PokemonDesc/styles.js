import { StyleSheet } from "react-native";
import COLORS from "../../config/colors";


const styles = {
    container:{
        flex:1,
        marginTop:40,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#EF8277'
    },
    row: {
        padding: 12,
        backgroundColor: COLORS.BLUE,
        borderRadius: 8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection:'row',
        paddingHorizontal: 8,
        paddingVertical:5,
        paddingLeft:5,
        borderWidth:10,
        borderColor:'#6495ED',
        borderRadius:10,
    },
    type: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: COLORS.RED,
    },
    typeName:{
        fontSize: 12,
        color: COLORS.LIGHT_BLUE,
    },
    pokemonName: {
        fontSize: 16,
        color: COLORS.LIGHT_BLUE,
    },
      
};


const styleSheet = StyleSheet.create(styles);

export default styleSheet;
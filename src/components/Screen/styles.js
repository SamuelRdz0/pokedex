import { StyleSheet, Dimensions } from "react-native";
const {height,width}=Dimensions.get('window');

const styles = {
    container: {
        flex:1,
        padding:60,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#fc6a6a',       
    },
    

};


const styleSheet = StyleSheet.create(styles);

export default styleSheet;
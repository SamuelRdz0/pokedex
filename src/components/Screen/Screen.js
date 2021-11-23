import React from "react";
import styleSheet from '../Screen/styles';
import { View } from "react-native";


const Screen = ({bgColor, children}) => {
    const CalculatedstyleSheet = {};
    if (bgColor) {
        CalculatedstyleSheet.container = {
            backgroundColor: bgColor,
        };
    }; 
    return (
    <View style={styleSheet.container, CalculatedstyleSheet.container}>
        {children}
    </View>
    );
};


export default Screen;
import React from "react";
import styleSheet from './styles';
import { View, li } from "react-native";
import { FlatListProps } from "react-native";


const Screen = (props) => {
    return <View style={styleSheet.container}>
        {props.children}
    </View>
};


export default Screen;
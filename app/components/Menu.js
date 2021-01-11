import React from "react"
import Icon from '@expo/vector-icons/FontAwesome';
import { View } from "react-native";

export default function Menu(props){
    const AbrirMenu = () =>{
        props.navigation.openDrawer();
    }
    return(
        <View>
            <Icon 
                name={"bars"} 
                size={30} 
                color={props.color} 
                style={{padding:10}}
                onPress={AbrirMenu}
            />
        </View>
    )
}
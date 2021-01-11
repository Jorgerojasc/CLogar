import React from "react"
import { View, Image } from "react-native";

export default function LogoEmpresa(){

    return(
        <View>
            <Image source={require("../../assets/img/logo.png")} style={{width:100, height:100}} resizeMode={"contain"}/>
        </View>
    )
}
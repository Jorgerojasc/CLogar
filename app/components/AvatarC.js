import React, {useState, useEffect} from "react"
import {Avatar, DefaultTheme, } from "react-native-paper"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AvatarC(props){
    const[color, setColor] = useState()
    useEffect( () => {
        if(props.color === null || props.color === undefined || props.color === 'undefined'){

            setColor('blue')
        }else{
            changeColor(props.color)
        }
        
    })
    
    var theme = {
        
        ...DefaultTheme,
        roundness: 2,
        colors: {
        ...DefaultTheme.colors,
        primary: color,
        },
    };
    const changeColor = async (value)=>{
        setColor(props.color)
        await AsyncStorage.setItem('Color',value)

        
    }
    return(
        <Avatar.Text
            style={props.style}
            size={props.size}
            label={"JR"}
            theme={theme}

        />
    )

}

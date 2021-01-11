import React, {useState, useEffect} from "react"
import {Title, Caption } from "react-native-paper"
import {View,StyleSheet, Image} from "react-native"
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"
import AsyncStorage from '@react-native-async-storage/async-storage';
import AvatarC from "../components/AvatarC"




export default function UserContent({...props}){
    //const[color, setColor] = useState()
    const[name, setName] = useState()
    const[mail, setMail] = useState()
    const[picture, setPicture] = useState()

    //Cargamos los datos del usuario 
    useEffect( () => {
        load()
        
    },[name,mail,picture])
    const load = async()=>{
        let userInfo = await  AsyncStorage.getItem("User")
        let uParse = JSON.parse(userInfo)
        setName(uParse.username)
        setMail(uParse.email)
        setPicture(uParse.picture.data.url)
    }

    // Sirve para cambiar el color de perfil
    // useEffect( () => {
    //     const changeColor = async()=>{
    //         let color =  await AsyncStorage.getItem("Color")//traemos el color del perfil guardado en el storage
    //         if(color!==null){
    //             setColor(color)
    //         }
    //         else{
    //             setColor('blue')
    //         }
            
    //     }
    //     const intervalId = setInterval(function () {
    //         changeColor()
    //     }, 100);
    //     return () => intervalId;
        
    // })


    return(
        
        <DrawerContentScrollView {...props}  >
            
            <View style={styles.datUser}>
                <Image style={styles.imgUser} source={{uri:picture}} />
                {/* <AvatarC size={60}   color={color} style={styles.imgUser}  /> */}
                <View style={styles.Name}> 
                    <Title style={styles.Title} >{name}</Title>
                    <Caption>{mail}</Caption>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    datUser:{
        borderBottomColor:"#e6e6e6",
        borderBottomWidth:1,
        height:90,
        flexDirection:'row'
    },
    imgUser:{
        marginLeft:10,
        marginTop:15,
        width:60,
        height:60, 
        borderRadius:100
        
    },
    Name:{
        marginLeft:15,
        flexDirection:'column',
    },
    Title:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:17
        
    },
    Caption:{
        fontSize:14,
    },
    Option:{
        width:200,
        height:40
    },
    Labelstyle:{
        fontSize:10,
        marginLeft:"-20%",
        flexWrap:"wrap",
    },
    iconStyle:{
        marginLeft:"10%",
        width:40,
        height:40
    }
})
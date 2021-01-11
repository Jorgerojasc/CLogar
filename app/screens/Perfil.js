import React, {useState, useEffect} from "react"
import {View, Text, TouchableOpacity, StyleSheet, ScrollView,Dimensions, Platform, Image} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Title, Caption } from "react-native-paper"
import AvatarC from "../components/AvatarC"
import {useAuth} from '../Auth/AuthContext'


const screenHeight = Math.round(Dimensions.get('window').height);

export default function Perfil(){

    const auth = useAuth()
    //const[color, setColor] = useState()
    const[name, setName] = useState()
    const[mail, setMail] = useState()
    const[picture, setPicture] = useState()

    useEffect( () => {
        // if(color === null ){

        //     setColor('blue')
        // }
        load()
        
    },[name,mail,picture])
    const load = async()=>{
        // let color = await AsyncStorage.getItem("Color")
        let userInfo = await  AsyncStorage.getItem("User")
        let uParse = JSON.parse(userInfo)
        setName(uParse.username)
        setMail(uParse.email)
        setPicture(uParse.picture.data.url)
        // if(color!==null){
        //     setColor(color)
        // }
    }
    // const changeColor = async (newColor) =>{
    //    setColor(newColor)
    //    await  AsyncStorage.setItem('Color',color)
    // }
    return(
        <View style={{height:(screenHeight-200), flex:1}}>
            <ScrollView  showsVerticalScrollIndicator={false} style={styles.viewBody} contentContainerStyle={{flexGrow:1}}>
                <View style={{ flex:1}}>

                    {/* <AvatarC size={100} color={color} style={styles.imgUser}/> */}
                    <Image style={styles.imgUser} source={{uri:picture}} />
                    <View style={styles.Name}> 
                        <Title style={styles.Title} >{name}</Title>
                        <Caption style={styles.correoText} >{mail}</Caption>
                    </View>
                    <Text style={styles.cambiarColor}>
                        Cambiar color del Perfil:
                    </Text>
                    <View style={styles.viewColors}>
                    
                        {/* <TouchableOpacity  onPress={()=>changeColor('red')} style={{...styles.botonColores, backgroundColor:"red"}}></TouchableOpacity> */}
                        <TouchableOpacity  style={{...styles.botonColores, backgroundColor:"red"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"green"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"yellow"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"blue"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"pink"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"purple"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"orange"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"brown"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"black"}}></TouchableOpacity>
                        <TouchableOpacity   style={{...styles.botonColores, backgroundColor:"#001269"}}></TouchableOpacity>
                        
                    </View>
                    {/* <TouchableOpacity onPress={()=>console.log("hola")} style={styles.viewPassword} >
                        <Text style={styles.textPassword} >Cambiar contraseña</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={{...styles.viewPassword, marginTop:"15%"}} onPress={()=>auth.signOut()} >
                        <Text style={styles.textPassword} >Cerrar Sesión</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewBody:{
        marginLeft:10,
        marginRight:10,
    },
    TextI:{
        fontSize:17,
        textAlign:"justify"
    },
    imgUser:{
        alignSelf:"center",
        marginTop:"5%",
        width:100,
        height:100, 
        borderRadius:100
    },
    cambiarColor:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:"15%"
    },
    viewColors:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
    },
    botonColores:{
        borderRadius:100,
        width: 35,
        height:35,
        borderWidth:5,
        borderColor:"#d9d9d9",
        marginLeft: "5%",
        marginTop:"3%"
    },
    Name:{
        flexDirection:'column',
        justifyContent:"center",
        alignSelf:"center",
    },
    Title:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:17
        
    },
    correoText:{
        alignSelf:"center",
        fontSize:14
    },
    viewPassword:{
        height:50,
        marginTop:(Platform.OS === "ios" ? "20%":"15%"),
        backgroundColor:"#001269"
    },
    textPassword:{
        fontSize:15,
        alignSelf:"center",
        marginTop:(Platform.OS === "ios" ? "4.5%" : "3.5%"),
        fontWeight:"bold",
        color:"#fff"
    }
})
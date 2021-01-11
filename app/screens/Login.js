import React,{useState} from "react"
import { 
  StyleSheet,
  Image, 
  Text ,
  View,
  StatusBar,
  ScrollView, 
  Platform,
  TouchableOpacity,
  Dimensions} from 'react-native';
import * as Facebook from 'expo-facebook';
import IconC from '@expo/vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from "../Auth/AuthContext"
import { set } from "react-native-reanimated";


export default function Login({navigation}){

  const[name, setName] = useState("")
  const[mail, setMail] = useState("")
  const[picture, setPicture] = useState("")

  const auth = useAuth()
  
  async function logIn() {
      try {
        await Facebook.initializeAsync({
          appId: '2744263595790525',
        });
        const {
          type,
          token,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile','email',],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`);
          let userInfo = await  response.json()
          auth.signIn({username:userInfo.name, email: userInfo.email, picture:userInfo.picture})
          // let value = JSON.stringify(userInfo)
          // AsyncStorage.setItem("User", value)
          // AsyncStorage.setItem("log",userInfo.name)
          // navigation.navigate("Principal");

        } else {
          console.log("Cancelo")
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    }
    return(
          //Bounces={false} probar si en un iphone pequeño sirve el scroll
          <View style={styles.container}>
            
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}  contentContainerStyle={{flexGrow:1}}>

              <View style={{ flex:1}}>
                  <StatusBar backgroundColor="#001269" barStyle="light-content"  />

                  <View style={styles.header_container}>
                    <Image source={require("../../assets/img/logo.png")} resizeMode={"stretch"} style={styles.Logo}/>
                  </View>
                  <View style={styles.login_container} behavior={"padding"} enabled >
                  <Text style={styles.textIS} >Empieza ahora!</Text>
                    {/* <Text style={styles.textIS} >Inicia Sesión</Text> */}
                    {/* <CustomInput
                        placeholder={"Correo"}
                        icon={"envelope"}
                    />

                    <CustomInput
                        placeholder={"Contraseña"}
                        icon={"lock"}
                        password={true}
                        iconR={"eye-outline"}
                    />
                    <Text style={styles.textFP}>¿Olvidaste tu contraseña?</Text> */}
                    <TouchableOpacity style={styles.button_container} onPress={()=>logIn()} >
                      <IconC name={"facebook-f"} size={30} color={"#2a5297"} style={{position:"absolute", left:15}} />
                      <Text style={styles.button_text}>Inicia Sesión con Facebook</Text>
                    </TouchableOpacity>
                    {/* <Text style={styles.textIS2} >O</Text> */}
                    {/* <TouchableOpacity style={styles.button_container2} onPress={()=>logIn()} >
                      <IconC name={"google"} size={30} color={"#D93025"} style={{position:"absolute", left:15}} />
                      <Text style={styles.button_text2}>Inicia Sesión con Google</Text>
                    </TouchableOpacity> */}
                    {/* <CustomButton text={"Entrar"} />
                    <View style={styles.line}></View>
                    <Text style={styles.textR}>¿Todavía no tienes cuenta? <Text style={{color:"#001269"}}>Registrate</Text></Text> */}
                  </View>
              </View>

            </ScrollView>

          </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001269',
      
    },
    header_container:{
      backgroundColor: '#001269',
      justifyContent: 'center',
      alignItems: 'center',
      height:(Platform.OS==="ios"?250:200)
      
    },
    login_container: {
      
      backgroundColor:"#fff",
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 40,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      flex:1
    },
    Logo:{
      width:"50%",
      height:"30%"
    },
    textIS:{
      fontSize:25,
      color:"#001269",
      fontWeight:"bold",
      alignSelf:"flex-start",
      marginLeft:"5%"
    },
    textIS2:{
      fontSize:25,
      color:"#001269",
      fontWeight:"bold",
      alignSelf:"center",
      marginTop:20
    },
    textFP:{
      fontSize:13,
      alignSelf:"flex-end",
      color:"#001269",
      fontWeight:"bold",
      marginRight:"5%",
      marginTop:"2%",
      textDecorationLine:"underline"
    },
    line:{
      marginTop:"5%",
      borderWidth:0.5,
      borderColor:"#001269",
      width:"80%"
    },
    textR:{
      marginTop:"5%",
      fontSize:17,
      color:"gray",
      fontWeight:"bold"
    },
    button_container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 50,
      backgroundColor: "rgba(42, 82, 151,0.2)",
      borderRadius: 5,
      marginTop: "35%"
    },
    button_text: {
      color: '#2a5297',
      fontSize: 15,
      fontWeight:"bold"
    },
    // button_text2:{
    //   color:"#D93025",
    //   fontSize: 15,
    //   fontWeight:"bold"
    // },
    // button_container2: {
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   width: 300,
    //   height: 50,
    //   backgroundColor: "rgba(217, 48, 37,0.2)",
    //   borderRadius: 5,
    //   marginTop: 20
    // },
  });
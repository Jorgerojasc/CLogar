import React from "react"
import { 
  StyleSheet,
  Image, 
  Text ,
  View,
  StatusBar,
  ScrollView, 
  Platform,
  Dimensions} from 'react-native';
import CustomButton from "../components/CustomButton"
import CustomInput from "../components/CustomInput"


const screenHeight = Math.round(Dimensions.get('window').height);


export default function Registro(){
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
                    <Text style={styles.textIS} >Inicia Sesión</Text>
                    <CustomInput
                        placeholder={"Nombre(s)"}
                        icon={"envelope"}
                    />

                    <CustomInput
                        placeholder={"Apellidos"}
                        icon={"lock"}
                        password={true}
                    />
                    <Text style={styles.textFP}>¿Olvidaste tu contraseña?</Text>
                    <CustomButton text={"Entrar"} />
                    <View style={styles.line}></View>
                    <Text style={styles.textR}>¿Todavía no tienes cuenta? <Text style={{color:"#001269"}}>Registrate</Text></Text>
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
    }
  });
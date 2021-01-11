import React, {useEffect} from "react";
import {View, Text, ScrollView, StyleSheet, Image, Dimensions,Platform, Linking} from "react-native";
import Carousel from "../components/Carousel";//Componente para ver el carrusel o el slider con auto-scroll
import Clientes from "../../assets/img/Clientes/DataClients";
import MapView,{ PROVIDER_GOOGLE, Marker } from "react-native-maps";


// Pantalla de Inicio
const screenHeight = Math.round(Dimensions.get('window').height);

export default function Inicio(){

    //Cargar cuando el usuario se regustre o logee
    // useEffect(() => {
    //     setTimeout(()=>{

    //     })
    // });
    
    const Whatsapp = async ()=>{
        await Linking.openURL("https://wa.me/+52999-350-5023?text=Buen día,Necesito hacer un presupuesto!")
    }
    const images = [
        {text:"Garantía, Calidad, Innovación y Servicio Personalizado",img:require("../../assets/img/Imagen1.jpeg")},
        {text:"Constructores Logar SA de CV",img:require("../../assets/img/Imagen2.jpeg")},
        {text:"Garantía, Calidad, Innovación y Servicio Personalizado",img:require("../../assets/img/Imagen3.jpeg")},
        {text:"Constructores Logar SA de CV",img:require("../../assets/img/Imagen4.jpeg")}
    ]//Imagenes para el slider
    
    const openMap =()=>{//Abrira el mapa del Sistema operativo para ver la ruta
        const addr = '21.002998741842653,-89.6262254392207';
        const Os = Platform.OS === "ios" ? "apple" : "google";
        Linking.openURL(`http://maps.${Os}.com/maps?daddr=${addr}`);
    }
    return(
        <View style={{height:(screenHeight-200), flex:1}}>
            <ScrollView  showsVerticalScrollIndicator={false} style={styles.viewBody} contentContainerStyle={{flexGrow:1}}>
                <View style={{ flex:1}}>
                    <Carousel images={images} /> 
                    <Text style={styles.textTitle}>Nuestros Clientes:</Text>

                    <View style={styles.viewLogos}>
                        {
                            Clientes.map(image=>{
                                return(
                                    <Image key={image} resizeMode={"contain"} source={image} style={{width:110,height:110}}/>
                                );
                                
                            })
                        }
                    </View>

                    <Text style={styles.textTitle}>Nuestros Compromisos:</Text>

                    <View style={styles.viewCompromisos}>
                        
                        <View style={styles.viewAbiental}>
                            <Text style={styles.textSubTitle}>Ambiental:</Text>
                            <Text style={styles.textContent}>
                                La empresa tiene establecida una política basada en la calidad y el 
                                medio ambiente, implementada sobre las normas UNE-EN-ISO 9001 y 
                                UNE-EN-ISO 14001 con la voluntad y el objetivo de obtener un alto 
                                nivel competitivo.
                            </Text>
                            
                        </View>
                        <View style={styles.line}></View>

                        <View style={styles.viewSocial}>
                            <Text style={styles.textSubTitle} >Social:</Text>
                            <Text style={styles.textContent} > 
                                Apoyamos a diferentes colectivos que fomentan el deporte tanto en 
                                los más pequeños como en los adultos, siempre apostando por 
                                las personas y colectivos que de forma gratuita se esfuerzan en 
                                mejorar nuestra sociedad y nuestro entorno.
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.textTitle} >Contacto: </Text>
                    <View>
                        <Text style={styles.textContacto}>
                            Teléfonos: (999) 289-5006 / (999) 195-6327
                        </Text>
                        <Text style={styles.textContacto} onPress={()=>Whatsapp()}>
                            WhatsApp: 999-350-5023
                        </Text>
                    </View>
                    <Text style={styles.textTitle} >Ubicación: </Text>

                    <MapView
                    
                        style={styles.map}
                        loadingEnabled={true}
                        provider={PROVIDER_GOOGLE}
                        region={{
                            latitude:21.002998741842653,
                            longitude:-89.6262254392207,
                            latitudeDelta:0.15,
                            longitudeDelta:0.15
                        }}
                    >
                        <MapView.Marker                             
                            coordinate={{
                                latitude:21.002998741842653,
                                longitude: -89.6262254392207
                            }}
                            
                        >
                            <View style={styles.markerView} onPress={()=>openMap()} >
                                <Text onPress={()=>openMap()} style={styles.markerText}>Constructores Logar SA de CV</Text>
                            </View>

                        </MapView.Marker>

                        <Marker
                            
                            coordinate={{
                                latitude:21.002998741842653,
                                longitude: -89.6262254392207
                            }}
                            
                            title={"Constructores Logar SA de CV"} 
                            description={"Calle 16A #23 X 35 y 35A Fracc, Colonial Chuburná, 97050 Mérida, Yuc."}
                            onPress={()=>openMap()}
                        />
                    </MapView>
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
    viewLogos:{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        alignSelf:"center",
        justifyContent:"center"
        
    },
    textTitle:{
        marginTop:"5%",
        padding:5,
        fontSize:20,
        fontWeight:"bold",
        color:"#6ec1e4"

    },
    viewCompromisos:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center"
    },
    viewAbiental:{
        width:"49%",
    },
    line:{
        borderRightColor: '#b3b3b3',
        borderRightWidth: 1,
        height:"95%",
        marginTop:"2%",
        marginLeft:"1%"
    },
    viewSocial:{
        width:"49%",
        marginLeft:"1%"
    },
    textSubTitle:{
        padding:5,
        fontSize:17,
        color:"#6ec1e4",
        fontWeight:"bold",
        textAlign:"center"
    },
    textContent:{
        fontSize:16,
        textAlign:"center",
        fontWeight:"bold"
        
    },
    textContacto:{
        padding:5,
        fontSize:15,
        fontWeight:"bold"
    },  
    map:{
        height:200,
        width:"100%"
    },
    markerView:{
        width:110,
        height:50,
        marginLeft:(Platform.OS === "ios" ? "50%":"55%")
    },
    markerText:{
        color:"red",
        fontWeight:"bold"
    }
})
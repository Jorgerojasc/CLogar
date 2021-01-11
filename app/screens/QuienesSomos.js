import React from "react"
import {View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView, Platform, Image, Animated} from "react-native"
import {PinchGestureHandler, State} from "react-native-gesture-handler"
const screenHeight = Dimensions.get('window').height;

export default function QuienesSomos({navigation}){


    const scale = new Animated.Value(1)

    const onZoom = Animated.event(
        [{
            nativeEvent: {scale}
        }],
        {
            useNativeDriver:true
        }
    )

    return(
        <View>

            <ImageBackground
                style={styles.container}
                source={require("../../assets/img/portada.jpg")}
            >

            </ImageBackground>
            <View style={{marginTop:(Platform.OS ==="ios" ? "17%":40), height:(Platform.OS ==="ios"? screenHeight-120:screenHeight-120)}} >
                <ScrollView  showsVerticalScrollIndicator={false} style={styles.viewBody} contentContainerStyle={{flexGrow:1}}>
                    <View style={{ flex:1}}>
                        <Text  style={styles.TextI}>
                            Somos una empresa constructora ubicada en la ciudad de Mérida, Yucatán, 
                            que ofrece los servicios de arquitectura, construcción y mantenimiento en general, 
                            tanto a nivel residencial como industrial.

                            Llevamos más de 15 años en el mercado y hemos logrado posicionarnos como una empresa
                            sólida y profesional, buscando en todo momento conocer y satisfacer las necesidades
                            de nuestros clientes.
                        </Text>
                        <PinchGestureHandler
                            onGestureEvent={onZoom}
                            onHandlerStateChange={(event)=>{
                                if(event.nativeEvent.oldState == State.ACTIVE){
                                    Animated.spring(scale,{
                                        toValue:1,
                                        useNativeDriver:true,
                                        
                                    }).start()
                                }
                            }}
                        >

                            <Animated.Image
                                resizeMode={"stretch"}
                                source={require("../../assets/img/Instalaciones.jpg")}
                                style={{height:300,width:400, transform:[{scale:scale}]}}
                            />
                        </PinchGestureHandler>
                        <View>
                            <Text  style={styles.TextI}>
                                <Text style={styles.textTitle}>Misión: </Text>
                                Brindar servicios integrales de construcción que se distingan 
                                por su calidad, funcionalidad, seguridad y confortabilidad.
                            </Text>
                        </View>
                        <View style={styles.viewText}>
                            <Text  style={styles.TextI}>
                                <Text style={styles.textTitle}>Visión: </Text>
                                Consolidarnos como una empresa líder en el ramo de la construcción,
                                buscando siempre estar a la vanguardia en conocimiento y calidad, 
                                manteniendo como cimientos nuestros valores en servicio y contribución 
                                a la sociedad y al mundo.
                            </Text>
                        </View>
                        <View style={styles.viewText}>
                            <Text  style={styles.TextI}>
                                <Text style={styles.textTitle}>Visión: </Text>
                                <Text style={{color:"#808080", fontWeight:"600"}}>Integridad</Text>, al ejercer nuestra labor profesional con honestidad, 
                                responsabilidad y respeto.
                                <Text style={{color:"#808080", fontWeight:"600"}}>Compromiso</Text>, al llevar a cabo las obras y proyectos en el tiempo y 
                                forma previamente establecidos.
                                <Text style={{color:"#808080", fontWeight:"600"}}>Seguridad</Text>, actualizando continuamente las técnicas, productos y procedimientos.
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 60 : 80,
      height:120
    },
    viewBody:{
        marginLeft:10,
        marginRight:10,
    },
    TextI:{
        fontSize:17,
        textAlign:"justify"
    },
    textTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"#EF662B"

    },
    viewText:{
        marginTop:5
    }
  });
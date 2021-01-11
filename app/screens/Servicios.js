import React, {useState} from "react"
import {View, Text, TouchableOpacity, StyleSheet, ScrollView,Dimensions, Image, Platform} from "react-native"
import Carousel from "../components/CarouselServicios"
import DataImageA from "../../assets/img/Areas/DataImageA"
import {Overlay, Icon} from "react-native-elements"


const screenHeight = Math.round(Dimensions.get('window').height);

export default function Srevicios(props){

    const[visible, setVisible] = useState(false)
    const[visibleU, setVisibleU] = useState(false)
    const[visibleO, setVisibleO] = useState(false)
    const[visibleM, setVisibleM] = useState(false)

    const changeVisible = ()=>{
        setVisible(true)
    }
    return(
        <View style={{height:(screenHeight-200), flex:1}}>
            <ScrollView  showsVerticalScrollIndicator={false} style={styles.viewBody} contentContainerStyle={{flexGrow:1}}>
                <View style={{ flex:1}}>
                    <Text  style={styles.TextI}>En Constructores Logar sabemos la importancia de sus proyectos, 
                        por lo cual contamos con personal capacitado y certificado en la 
                        instalación de materiales de gran calidad.

                        Los materiales usados en la obra son seleccionados cuidadosamente, 
                        buscando la garantía y calidad que nos respaldan, cumpliendo 
                        con el propósito de su obra.

                        En Constructores Logar estamos tan seguros de lo que hacemos, que le damos 
                        garantía por los proyectos realizados: Nuestro Sello de Garantía y Calidad 
                        respalda cada obra que usted contrate con nosotros, en cualquiera de las 
                        siguientes áreas:
                    </Text>

                    <Carousel images={DataImageA} />

                    <View style={styles.viewOpcion}>
                        <TouchableOpacity onPress={()=>setVisible(true)}>
                            <Image resizeMode={"contain"} style={styles.imageStyles}  source={require("../../assets/img/Servicios/construccion.png")} />    
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setVisibleO(true)}>
                            <Image  resizeMode={"contain"} style={styles.imageStyles}  source={require("../../assets/img/Servicios/maq.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setVisibleU(true)} >
                            <Image  resizeMode={"contain"} style={styles.imageStyles}  source={require("../../assets/img/Servicios/Sin-título-2-1.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setVisibleM(true)}>
                            <Image  resizeMode={"contain"} style={styles.imageStyles}  source={require("../../assets/img/Servicios/Sin-título-2.png")} />
                        </TouchableOpacity>
                        {/* <Text style={styles.textOpcion}>Construcción y Remodelación</Text> */}
                    </View>

                    <Overlay
                        isVisible={visible}
                        windowBackgroundColor="rgba(0,0,0,0.5)"
                        overlayBackgroundColor="transparent"
                        overlayStyle={styles.overlay}
                        style={styles.overlay}
                    >
                        <>
                            <TouchableOpacity onPress={()=>setVisible(false)} style={styles.closeIcon} >
                                <Icon type="material-community" name={"close-circle"} size={32} color={"red"}  />
                            </TouchableOpacity> 
                            <View style={styles.viewOverlay}>   
                                <ScrollView showsVerticalScrollIndicator={false}   >


                                    <Text style={styles.textOverlay}>
                                        <Text style={styles.textTitle} >Construcción y Remodelación: </Text>
                                        Realizamos construcciones y remodelaciones bajo las normas en seguridad,
                                        todo para ofrecer un patrimonio digno y con mayor plusvalía, tanto a nivel 
                                        Residencial, como Comercial e Industrial.

                                        Nuestros servicios abarcan desde la cimentación, hasta los últimos acabados, 
                                        todo supervisado por personal capacitado.
                                    </Text>
                                    <Text  style={{...styles.textOverlay, marginTop:"5%"}}>
                                        <Text style={styles.textTitle} >Diseño Arquitectónico: </Text>
                                        Uno de nuestros objetivos primordiales es brindar una atención personalizada, 
                                        analizando con detalle cada una de las necesidades de nuestros clientes, para 
                                        hacer de una idea toda una realidad.

                                        Diseñamos estilos arquitectónicos estéticos y vanguardistas, con espacios amplios
                                        y funcionales que proporcionan una mayor comodidad
                                    </Text>

                                </ScrollView>
                 
                            </View>
                        </>

                    </Overlay>
                    {/* Urbanizacion */}
                    <Overlay
                        isVisible={visibleU}
                        windowBackgroundColor="rgba(0,0,0,0.5)"
                        overlayBackgroundColor="transparent"
                        
                        style={styles.overlay}
                    >
                        <>
                            <TouchableOpacity onPress={()=>setVisibleU(false)} style={styles.closeIcon} >
                                <Icon type="material-community" name={"close-circle"} size={32} color={"red"}  />
                            </TouchableOpacity>
                            <View style={styles.viewOverlay}>
                                <ScrollView showsVerticalScrollIndicator={false}   >


                                    <Text style={styles.textOverlay}>
                                    <Text style={styles.textTitle} >Urbanización: </Text>
                                        Nos hemos especializado en la instalación de redes de agua potable, 
                                        telefonía y cable. Esto incluye, la gestión de trámites para la autorización
                                         del proyecto, planos, elaboración de zanjas, construcción de las redes y 
                                         supervisión.

                                        Así mismo, hemos dado servicio de alumbrado, pintura y mantenimiento de parques.
                                    </Text>

                                </ScrollView>                     
                            </View>
                        </>

                    </Overlay>
                                        
                    {/* Otros Servicios */}
                    <Overlay
                        isVisible={visibleO}
                        windowBackgroundColor="rgba(0,0,0,0.5)"
                        overlayBackgroundColor="transparent"
                        
                        style={styles.overlay}
                    >
                        <>
                            <TouchableOpacity onPress={()=>setVisibleO(false)} style={styles.closeIcon} >
                                <Icon type="material-community" name={"close-circle"} size={32} color={"red"}  />
                            </TouchableOpacity>
                            <View style={styles.viewOverlay}>
                                <ScrollView showsVerticalScrollIndicator={false}   >

                                
                                    <Text style={styles.textOverlay}>
                                        <Text style={styles.textTitle} >Trámites y Permisos: </Text>
                                        El cumplimiento de los reglamentos vigentes, fortalece la confianza y asegura
                                        la tranquilidad de quienes contratan nuestros servicios.

                                        Tramitamos licencias de funcionamiento, permisos de construcción, altas de 
                                        las obras ante el IMSS, contratos de servicios, créditos, etc.
                                    </Text>
                                    <Text  style={{...styles.textOverlay, marginTop:"5%"}}>
                                        <Text style={styles.textTitle} >Renta de Maquinaria: </Text>
                                        Contamos con un Mini cargador marca CASE con martillo demoledor, el cual se
                                        puede ocupar en espacios reducidos, como para excavación de piscinas.  
                                        Contamos con personal capacitado para su operación y la maquinaria cuenta 
                                        con seguro de cobertura completa en caso de accidente y servicio satelital GPS.
                                    </Text>

                                </ScrollView>                     
                            </View>
                        </>

                    </Overlay>


                    {/* Mantenimiento */}
                    
                    <Overlay
                        isVisible={visibleM}
                        windowBackgroundColor="rgba(0,0,0,0.5)"
                        overlayBackgroundColor="transparent"
                        
                        style={styles.overlay}
                    >
                        <>
                            <TouchableOpacity onPress={()=>setVisibleM(false)} style={styles.closeIcon} >
                                <Icon type="material-community" name={"close-circle"} size={32} color={"red"}  />
                            </TouchableOpacity>
                            <View style={styles.viewOverlay}>
                                <ScrollView showsVerticalScrollIndicator={false}   >

                                
                                    <Text style={styles.textOverlay}>
                                        <Text style={styles.textTitle} >Mantenimiento: </Text>
                                        Realizamos mantenimientos efectivos en las áreas de:

                                        Albañilería – Acabados – Impermeabilización – Carpintería – Electricidad – 
                                        Herrería – Pintura – Sistemas Hidro Sanitarios – Sistemas de Riego – Jardinería
                                         – Aluminios – Tablaroca.
                                    </Text>

                                </ScrollView>                     
                            </View>
                        </>

                    </Overlay>

                    
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
    viewOpcion:{
        marginTop:"1%",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",

    },
    textOpcion:{
        fontSize:15,
        fontWeight:"bold",
        color:"#6ec1e4"


    },
    imageStyles:{
        width:150,
        height:150,
        marginLeft:"1%",

    },
    overlay:{
        
    },
    viewOverlay:{
        width:"100%",
        height:250,
        
    },
    closeIcon:{
        position:"relative",
        marginLeft:"90%",
        width:"90%",
        height:30,
        zIndex:9999999,
        marginTop:"-2%",
        

    },
    textOverlay:{
        fontSize:15,
        fontWeight:"bold",
      
        textAlign:"center"
    },
    textTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"#6ec1e4"

    },

    
})
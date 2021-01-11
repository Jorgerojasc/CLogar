import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer"
import { Icon } from 'react-native-elements'
import { StyleSheet } from "react-native";

import ServiciosStack from "../navigations/ServiciosStack"
import InicioStack from "../navigations/InicioStack"
import PerfilStack from "../navigations/PerfilStack"
import QuienesSomosStack from "./QuienesSomosStack"
import UserContent from "../components/UserContent"

const Drawer = createDrawerNavigator();

export default function Navigation(){
    return(
        <Drawer.Navigator 
          
          initialRouteName="Inicio" 
          drawerContentOptions={{
            inactiveTintColor:"#646464",
            activeTintColor: "#001269",
            
          }}
          
          screenOptions={({route})=>({
            drawerIcon:({color})=> screenOptions(route,color),
            swipeEnabled:false
          })}
          drawerContent={(props) => <UserContent {...props} />}
          
        >
          
          <Drawer.Screen name="Perfil" component={PerfilStack} />
          <Drawer.Screen name="Inicio" component={InicioStack}  options={{drawerLockMode: 'locked-closed'}}  /> 
          <Drawer.Screen name="Servicios" component={ServiciosStack} />
          <Drawer.Screen name="¿Quienes Somos?" component={QuienesSomosStack} />
          
        </Drawer.Navigator>
    )

}



function screenOptions(route, color){
  let iconName;
  let moreOptions;
  switch(route.name){
    case "Inicio":
      iconName = "home"
      break;
    case "Servicios":
      iconName = "account-hard-hat"
      break;
    case "Perfil":
      iconName="account"
      break;
    case "¿Quienes Somos?":
      iconName="office-building"
      break;
    // case "Asistencia":
    //   iconName="face-agent"
    //   moreOptions=true;
    //   break;
    case "Contacto":
      iconName="card-account-phone"
      break;
    case "Salir":
      iconName="logout"
      break;
    default:
      break;
  }
  // if(moreOptions==true){
  //   return(
  //     <>
  //       <Icon type="material-community" name={iconName} size={22} color={color} />
  //       <Icon type="material-community" name={"chevron-right"} size={22} color={color} style={styles.icon}  />
  //     </>
  //   )
  // }
  return(
    <>
      <Icon type="material-community" name={iconName} size={22} color={color} />
    </>
    
    
  )

}

const styles = StyleSheet.create({
  icon:{
    left:5,
  }
})


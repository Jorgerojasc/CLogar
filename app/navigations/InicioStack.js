import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Inicio from "../screens/Inicio"
import Menu from "../components/Menu";
import Logo from "../components/LogoEmpresa";
const Stack = createStackNavigator();

export default function InicioStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Incio"
                component={Inicio}
                options={({navigation})=>({
                    
                    headerStyle:{
                        backgroundColor:"#001269",
                        height:120,
                    },
                    headerTintColor: '#fff',
                    headerTitle:()=>(<Logo/>),
                    headerLeft:()=>(<Menu navigation={navigation} color={"white"}/>),
                    cardStyle:{
                        backgroundColor:'#fff'
                    },
                    
                     
                })}
                
                
            />
        </Stack.Navigator>
    );
}

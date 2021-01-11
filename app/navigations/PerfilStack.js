import React from "react"
import {createStackNavigator} from "@react-navigation/stack"

import Perfil from "../screens/Perfil"
import Menu from "../components/Menu"

const Stack = createStackNavigator();

export default function PerfilStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Perfil"
                component={Perfil}
                options={({navigation})=>({
                    
                    headerStyle:{
                        backgroundColor:"#001269",
                        height:120,
                        
                    },
                    headerTitleStyle:{
                        fontSize:25
                    },
                    headerTintColor: '#fff',
                    headerLeft:()=>(<Menu navigation={navigation} color={"white"}/>),
                    cardStyle:{
                        backgroundColor:'#fff'
                    },
                    
                     
                })}
            />
        </Stack.Navigator>
    );
}
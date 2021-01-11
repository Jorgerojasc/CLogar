import React from "react"
import {createStackNavigator} from "@react-navigation/stack"

import Servicios from "../screens/Servicios"
import Menu from "../components/Menu"


const Stack = createStackNavigator();

export default function ServiciosStack(){

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Servicios"
                component={Servicios}
                options={({navigation})=>({
                    
                    headerStyle:{
                        backgroundColor:"#001269",
                        height:120,
                    },
                    headerTintColor: '#fff',
                    title:"Servicios",
                    headerLeft:()=>(<Menu navigation={navigation} color={"white"}/>),
                    cardStyle:{
                        backgroundColor:"#fff"
                    }
                    
                })}
            />
        </Stack.Navigator>
    );
}
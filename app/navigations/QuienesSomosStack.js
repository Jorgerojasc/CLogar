import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Menu from "../components/Menu"
import QuienesSomos from "../screens/QuienesSomos"

const Stack = createStackNavigator();
//header:()=>(<ImageHeader navigation={navigation} />),
export default function QuienesSomosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="¿Quienes Somos?"
                component={QuienesSomos}
                options={({navigation})=>({
                    headerTransparent:true,
                    
                    headerStyle:{   
                        backgroundColor: 'transparent',
                        height:120,
                    },
                    headerTintColor: '#001269',
                    headerTitleStyle:{
                        fontWeight:"bold",
                        fontSize:25,
                        color:"white"
                    },
                    title:"¿Quienes Somos?",
                    headerLeft:()=>(<Menu navigation={navigation} color={"#001269"}/>),
                    cardStyle:{
                        backgroundColor:'#fff'
                    },
                    
                     
                })}
            />
        </Stack.Navigator>
    );
}
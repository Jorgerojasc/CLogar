import React from "react"
import {createStackNavigator} from "@react-navigation/stack"

import Contacto from "../screens/Contacto"

const Stack = createStackNavigator();

export default function ContactoStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Contacto"
                component={Contacto}
                options={
                    {
                        title:"Contacto"
                    }
                }
            />
        </Stack.Navigator>
    );
}
import React from "react"
import {createStackNavigator} from "@react-navigation/stack"

import Asistencia from "../screens/Asistencia"

const Stack = createStackNavigator();

export default function AsistenciaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Asistencia"
                component={Asistencia}
                options={
                    {
                        title:"Asistencia"
                    }
                }
            />
        </Stack.Navigator>
    );
}
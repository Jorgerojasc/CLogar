import React from "react"
import {createStackNavigator} from "@react-navigation/stack"

import Construccion from "../serviciosScreen/Construccion"

const Stack = createStackNavigator();

export default function ConstruccionStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Construcción y Remodelación"
                component={Construccion}
                options={
                    {
                        title:"Construccion"
                    }
                }
            />
        </Stack.Navigator>
    );
}
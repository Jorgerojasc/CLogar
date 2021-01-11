import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../screens/Login"
import Navigation from "../navigations/Navigation"
import Loading from "../components/Loading"
import {useAuth} from '../Auth/AuthContext'
const Stack = createStackNavigator()

export default function AuthNavigator() {
    const auth = useAuth()
    if(auth.isLoading){
        return(
            <Loading isVisible={true} text={"Cargando..."}/>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown:false
                }}
            >
                {
                    auth.user == null ?
                    (<Stack.Screen name="Login" component={Login} />):
                    (<Stack.Screen name="Principal" component={Navigation}/>)
                }

            </Stack.Navigator>
        </NavigationContainer>
    );
}
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import IconC from '@expo/vector-icons/FontAwesome';

export default function CustomInput(props) {
    return (
        <View style={styles.input_container}>
            
            <Input
                leftIcon={
                    <IconC style={styles.input_icon} name={props.icon} size={30} color={"rgba(0, 18, 105, 0.4)"}/>
                }
                rightIcon={
                    <Icon type={"material-community"} style={styles.input_icon} name={props.iconR} size={30}/>
                }
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.password}
                onChangeText={props.action}
            />
                 
        </View>
    );
}

const styles = StyleSheet.create({
    input_container: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#001269',
        borderRadius: 5,
        padding: 5,
        marginTop: 10
    },
    input: {
        width: "90%",
        height: 40,
        fontSize: 20,
        marginLeft: 10
    },
    input_icon: {
        marginLeft: 10
    }
});
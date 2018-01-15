//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from 'react-native';

// create a component
export const Login = () =>{
    return(
        <View>

            <View style={styles.container}>
                <Text style={styles.h1}>Accede a Paci</Text>
                <Text style={styles.h4}>Ingresa los siguientes datos</Text>
                <TextInput
                placeholder="Usuario"
                style={styles.input}
                />
                <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.input}
                />
                <View style={styles.row}>
                <Switch style={styles.switch}

                />
                <Text style={styles.switchT}> Recordar mis datos</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonT}>INGRESAR</Text>
                </TouchableOpacity>
                <Text style={{fontSize:14, color: '#757779', marginTop:28, marginLeft:42}}>¿Olvidate tu contraseña?</Text>

            </View>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    h1: {
        color: '#757779',
        fontSize: 32,
      },
      h4: {
        color: '#b4b6b8',
        fontSize: 14,
      },
      container: {
        marginTop: 30,
        marginLeft: 40,
      },
      input: {
        paddingTop: 40,
        fontSize: 24,
        borderBottomWidth: 1,
        padding: 5,
        width: 240,
        borderColor: '#b4b6b8',
      },
      switch: {
        marginTop:20
      },
      switchT: {
        marginLeft: 5,
        marginTop:25,
        fontSize: 14,
        color: '#757779'
      },
      row:{
        flexDirection: 'row'
      },
      button: {
        marginLeft: 35,
        marginTop: 42,
        width: 180,
        height: 38,
        backgroundColor: '#add44c',
        borderRadius:50,
        overflow: 'hidden',
      },
      buttonT: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 11,
      },
});

//make this component available to the app
export default Login;

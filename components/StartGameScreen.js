import React from 'react';
import Color from '../constants/color';
import {Text, StyleSheet, View, TextInput, Button } from "react-native";

const StartGameScreen = prop =>{
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen is here</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                  <View style={styles.button}><Button title="Reset" onPress={()=> {}} color={Color.secondary}/></View>  
                  <View style={styles.button}><Button title="Confirm" onPress={()=> {}} color={Color.primary}/></View> 
                </View>
            </View>
        </View>
     );
};

const styles = StyleSheet.create({
     screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
     },
     title: {
        fontSize: 20,
        marginVertical: 10,
     },
     inputContainer: {
        width:300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: .26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
     },
     buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
     },
     button: {
      width:100
     },
});

export default StartGameScreen;
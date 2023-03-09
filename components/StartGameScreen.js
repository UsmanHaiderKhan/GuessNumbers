import React, { useState } from 'react';

import {Text,TouchableWithoutFeedback,StyleSheet, View, Button, Keyboard } from "react-native";
import Card  from './Card';
import Color from '../constants/color';
import Input from './Input';

const StartGameScreen = prop =>{
   const [enteredValue, setEnteredValue] = useState('');
   const [confirm, setConfirm] = useState(false);
   const [selectedNumber, setSelectedNumber]= useState('');

   const numberInputHandler = inputText => {
      setEnteredValue(inputText.replace(/[^0-9]/g, ''));
   }
   const resetInputHandler  = ()=>{
      setEnteredValue('');
      setConfirm(false);
   }
   const confirmInputHandler = ()=>{
      const chosenNumber = parseInt(enteredValue);
      if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
         return;
      }
         setConfirm(true);
         setSelectedNumber(chosenNumber);
         setEnteredValue('');
   }
   let confirmedOutPut;
   if(confirm){
      confirmedOutPut = <Text>ChosenNumber : {selectedNumber}</Text>
   }

    return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
         <View style={styles.screen}>
               <Text style={styles.title}>The Game Screen is here</Text>
               <Card style={styles.inputContainer}>
                  <Text style={styles.title}>Select a Number</Text>
                  <Input style={styles.input} 
                  blurOnSubmit 
                  autoCapitalize='none' 
                  autoCorrect={false}
                  keyboardType='number-pad'
                  maxLength={2}
                  onChangeText={numberInputHandler}
                  value={enteredValue} />
                  <View style={styles.buttonContainer}>
                     <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Color.secondary}/></View>  
                     <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Color.primary}/></View> 
                  </View>
               </Card>
               {confirmedOutPut}
         </View>
      </TouchableWithoutFeedback>
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
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
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
     input:{
      width:60,
      textAlign: 'center'
     }
});

export default StartGameScreen;
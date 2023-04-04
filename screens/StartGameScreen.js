import React, { useState } from 'react';

import {Text,TouchableWithoutFeedback,StyleSheet, View, Button,Alert, Keyboard } from "react-native";
import Card  from '../components/Card';
import NumberContainer from '../components/NumberContainer'
import Color from '../constants/color';
import Input from '../components/Input';

const StartGameScreen = props =>{
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
      if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
         Alert.alert('Invalid Input Input','Number should between the 1 to 99',
           [{text: 'OK',style:'destructive', onPress:resetInputHandler}]
         );
         return;
      }
         setConfirm(true);
         setSelectedNumber(chosenNumber);
         setEnteredValue('');
         Keyboard.dismiss();
   }
   let confirmedOutPut;
   if(confirm){
      confirmedOutPut = 
      <Card style={styles.summeryContainer}>
         <Text>You Selected</Text>
         <NumberContainer>{selectedNumber}</NumberContainer>
         <Button title='Start Game' onPress={()=> props.onStartGame(selectedNumber )} />
      </Card>
     
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
      //   fontFamily: 'popper-bold',
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
     },
     summeryContainer:{
      marginTop: 20,
      alignItems: 'center'
     }
});

export default StartGameScreen;
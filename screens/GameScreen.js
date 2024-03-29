import React,{useState, useRef, useEffect} from "react";

import { Text, View, StyleSheet, Button, Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween  = (min,max,exclude) =>{
   min =Math.ceil(min);
   max =Math.ceil(max);
   const randNum = Math.floor(Math.random() * (max-min)) + min;

   if(randNum === exclude){
      return generateRandomBetween(min,max,exclude); 
   }else{
      return randNum;
   }

}

const GameScreen = props =>{
const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));
const [rounds, setRounds] = useState(0);
const currentLow = useRef(1);
const currentHigh = useRef(100);

useEffect(()=>{
   if(currentGuess === props.userChoice){
     props.onGameOver(rounds); 
   }
},[currentGuess, userChoice, onGameOver]);

const nextGuessHandler = direction =>{
   if((direction === 'Lower' && currentGuess < props.userChoice) || (direction === 'Greater' && currentGuess > props.userChoice)){ 
    Alert.alert("Don't Lie to me", "You Know That You are Wrong...!",[{text:'Sorry',style:'cancel'}]);
    return;
   }
   if(direction === 'Lower'){
    currentHigh.current = currentGuess;
   }else{
      currentLow.current = currentGuess;
   }
   
   const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
   setCurrentGuess(nextNumber); 
   setRounds(currentRound => currentRound +1);
};

return(
   <View style={styles.screen}>
     <Text>Opponent's Guess</Text>
     <NumberContainer> {currentGuess} </NumberContainer>

     <Card style={styles.buttonContainer}>
       <Button title="LOWER" onPress={nextGuessHandler.bind(this,'Lower')}/>
       <Button title="GREATER" onPress={nextGuessHandler.bind(this,'Greater')}/>
     </Card> 
   </View>
)
   
};

const styles = StyleSheet.create({
     screen:{
        flex: 1,
        padding:10,
        alignItems:'center'
     },
     buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: 300,
      maxWidth: '80%'
     },

});

export default GameScreen;
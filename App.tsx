import React,{useState} from 'react'
import { StyleSheet, View } from 'react-native';

import  Header  from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
   const[userNumber, setUserNumber]  = useState();
   const[guessRounds, setGuessRounds] = useState(0);
   const startGameHandler = (selectedNumber: React.SetStateAction<undefined>) => {
      setUserNumber(selectedNumber);
   };

   const gameOverHandler = (numOfRounds: React.SetStateAction<number>) =>{
    setGuessRounds (numOfRounds);
   }

   let content = <StartGameScreen onStartGame ={startGameHandler}/>;
   if(userNumber && guessRounds <= 0){
    content =<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
   }else if(guessRounds > 0){
    content = <GameOverScreen/>
   }
  return (
    <View style={styles.screen}> 
     <Header title="Guess A Number" />
     {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

import React,{useState} from 'react'
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from "expo";

import  Header  from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () =>{
  return Font.loadAsync({
    'popper-reg': require('./assets/fonts/Poppins-Regular.ttf'),
    'popper-bold': require('./assets/fonts/Poppins-Bold.ttf')
  });
}

export default function App() {
   const [userNumber, setUserNumber]  = useState();
   const [guessRounds, setGuessRounds] = useState(0);
   const [dataLoaded, setDataLoaded] = useState(false);
   if(!dataLoaded){
    // return <AppLoading startAsync={fetchFonts} onFinish={()=> setDataLoaded(true)} onError={(err:any)=> console.log(err)} />;
   }
   const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber;
   };

   const startGameHandler = (selectedNumber:any) => {
      setUserNumber(selectedNumber);
   };

   const gameOverHandler = (numOfRounds:any) =>{
    setGuessRounds (numOfRounds);
   }

   let content = <StartGameScreen onStartGame={startGameHandler}/>;

   if(userNumber && guessRounds <= 0){
    content =<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
   }else if(guessRounds > 0){
    content = <GameOverScreen roundNumber={guessRounds} userNumber={userNumber} onRestart= {newGameHandler}/>
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

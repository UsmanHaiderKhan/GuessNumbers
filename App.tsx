import React from 'react'
import { StyleSheet, View } from 'react-native';

import  Header  from './components/Header';
import GameScree from './components/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}> 
     <Header title="Guess A Number" />
     <GameScree></GameScree>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

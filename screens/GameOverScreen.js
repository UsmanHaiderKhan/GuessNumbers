import React from "react";

import { Text, View, StyleSheet, Button } from "react-native";

const GameOverScreen = props =>{
    return(
    <View style={styles.screen}>
        <Text>Your Game is Over! </Text>
        <Text>Number of rounds : {props.roundNumber}</Text>
        <Text>Number was : {props.userNumber}</Text>

        <Button title="NEW GAME" onPress={props.onRestart}/>
    </View>
    );
};

const styles= StyleSheet.create({

    screen:{
        flex:1,
        padding:10,
        alignItems: "center",
        justifyContent: "center",
    }

});

export default GameOverScreen;
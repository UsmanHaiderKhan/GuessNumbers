import React from "react";

import { Text, View, StyleSheet } from "react-native";

const GameOverScreen = props =>{
    return(
    <View style={styles.screen}>
        <Text>Your Game is Over! </Text>
    </View>
    );
};

const styles= StyleSheet.create({

    screen:{
        flex:1,
        padding:10,
        alignItems: "center",
        justifyContent:'center',
        

    }

});

export default GameOverScreen;
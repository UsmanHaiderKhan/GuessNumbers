import second from 'react';
import { Text, View, StyleSheet } from 'react-native';

import  Color from '../constants/color';

const NumberContainer = props =>{

    return(
      <View style={styles.container}>
        <Text style={styles.number}>{props.children}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
    container:{
      borderWidth:2,
      borderColor: Color.primary,
      padding:10,
      borderRadius:10,
      marginVertical:10,
      alignItems:'center',
      justifyContent: 'center'
    },
    number:{
        color:Color.primary,
        fontSize:22
     }
});
export default NumberContainer;
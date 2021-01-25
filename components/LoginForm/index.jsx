import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginForm() {
    return (
       <View style={styles.formContainer}>
               <Icon style={styles.formIcon} name="home" />
               <Text style={styles.text1}>Login using fingerprint</Text>
               <Text style={styles.text2}>Place your fingerprint on fingerprint scanner to login</Text>
               <Text style={styles.text3}>or</Text>
               <Text style={styles.text4}>Login using PIN</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formIcon:{
        color: 'orange',
        fontSize: 50
    },
    // text1:{
    //     fontWeight: 'bold',
    //     // fontSize: 20,
    //     // margin: 5
    // },
    // text2:{
    //     color: '#ccc',
    //     margin: 5
    // },
    // text3:{
    //     margin: 5
    // },
    // text4:{
    //     margin: 5,
    //     fontWeight: 'bold',
    //     textDecorationLine: 'underline'
    // }
})
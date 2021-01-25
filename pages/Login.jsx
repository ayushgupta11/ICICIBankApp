import React from 'react';
import { Button, Image, StyleSheet, Text, Touchable, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function Login({ navigation }) {
    const Logo = ()=>{
        return <Image source={require('../assets/login-logo.png')} style={styles.image}/>
    }
    return (
            <View style={styles.container}>
                <Logo />
                <TextInput placeholder='Email' style={styles.textinput}></TextInput>
                <TextInput placeholder='Password' secureTextEntry style={styles.textinput}></TextInput>
                <View>
                    <TouchableOpacity style={styles.forgotpassword}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Button title='login' onPress={() => navigation.navigate('Dashboard') } />
                </View>
                <View style={styles.row}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ marginBottom: 10 }}>OR</Text>
                    <Button title='Sign in using OTP' onPress={() => navigation.navigate('OTP') } />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: '#ADD8E6'
    },
    row: {
      flexDirection: 'row',
    },
    link: {
      color: 'blue',
      fontWeight: 'bold',
    }, 
    image: {
      width: 90,
      height: 90,
      marginTop: 100,
    },
    textinput: {
      width: 250,
      marginTop: 20,
      borderWidth: 1,
      padding: 10,
    },
    forgotpassword: {
      width: '100%',
      marginTop: 10,
      marginBottom: 24,
      alignItems: 'flex-end',
    },
    forgot: {
      fontSize: 13,
      color: 'blue'
    },
    button: {
      width: 300,
      padding: 20
    }
  });
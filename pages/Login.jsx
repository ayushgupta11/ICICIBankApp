import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, Touchable, View, Modal, TouchableHighlight } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

export default function Login({ navigation }) {
  const Logo = () => {
    return <Image source={require('../assets/login-logo.png')} style={styles.image} />
  }
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("You are trying to leave the page");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>OTP via</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, margin: 10, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('FirstScreen')
              }}
            >
              <Text style={styles.textStyle}>Email</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('FirstScreen')
              }}
            >
              <Text style={styles.textStyle}>SMS</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Logo />
      <TextInput placeholder='Email' style={styles.textinput}></TextInput>
      <TextInput placeholder='Password' secureTextEntry style={styles.textinput}></TextInput>
      <View>
        <TouchableOpacity style={styles.forgotpassword}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <Button title='login' onPress={() => navigation.navigate('Dashboard')} />
      </View>
      <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.link}>Signup</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{ display: 'flex', marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ marginBottom: 10 }}>OR</Text>
                    <Button title='Sign in using OTP' onPress={() => navigation.navigate('OTP') } />
                </View> */}
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
    textAlign: 'center'
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#00008b",
    fontWeight: "bold",
    fontSize: 20
  }
});
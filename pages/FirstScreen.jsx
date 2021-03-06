import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: "",
            two: "",
            three: "",
            four: "",
        };
    }

    render() {
        return (
            <View style={styles.container0}>
                <View >
                    <Text style={styles.Text}>Enter Mobile Number</Text>
                </View>
                <View style={styles.container1}>
                    <TextInput
                        maxLength={10}
                        keyboardType='numeric'
                        style={styles.input}
                        name="one"
                        placeholder={'Enter your mobile number'}
                        value={this.state.one}
                        onChangeText={(e) => {
                            this.setState({ one: e });
                        }}
                    />
                </View>
                <View style={styles.parent}>
                    <Button title='Submit' onPress={() => this.props.navigation.navigate('OTP') } />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    Text: {
        fontWeight: "600",
        fontSize: 35,
        textAlign: 'center'
    },
    container0: {
        flex: 1,
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: 'center'
    },
    container1: {
        flex: 0.3,
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    btn: {
        width: '50%'
    },
    input: {
        // position:"relative",
        backgroundColor: "#f5f4f2",
        textAlign: "center",
        fontWeight: "600",
        alignSelf: "center",
        padding: 10,
        fontSize: 20,
        height: 50,
        width: '80%',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        margin: '2.5%'
    },
    parent: {
        width: 300,
        backgroundColor: 'red',
        margin: 50,
    }
});
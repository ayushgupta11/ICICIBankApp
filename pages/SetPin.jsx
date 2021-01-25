import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";

export default class SetPin extends Component {
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
                    <Text style={styles.Text}>Set your PIN</Text>
                </View>
                <View style={styles.container1}>
                    <TextInput
                        maxLength={4}
                        style={styles.input}
                        name="one"
                        keyboardType='numeric'
                        value={this.state.one}
                        onChangeText={(e) => {
                            this.setState({ one: e });
                        }}
                        placeholder={'Enter PIN'}
                    />
                    <TextInput
                        maxLength={4}
                        style={styles.input}
                        name="two"
                        keyboardType='numeric'
                        value={this.state.two}
                        onChangeText={(e) => {
                            this.setState({ two: e });
                        }}
                        placeholder={'Confirm PIN'}
                    />
                </View>

                <View style={styles.parent}>
                    <Button title='Submit' onPress={() => this.props.navigation.navigate('Dashboard') } />
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
        flexDirection: "column",
    },
    btn: {
        width: '80%'
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
        width: '70%',
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
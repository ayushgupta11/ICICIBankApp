import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default class OTP extends Component {
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
                    <Text style={styles.Text}>Enter Passcode</Text>
                </View>
                <View style={styles.container1}>
                    <TextInput
                        maxLength={1}
                        style={styles.input}
                        name="one"
                        value={this.state.one}
                        onChangeText={(e) => {
                            this.setState({ one: e });
                        }}
                    />
                    <TextInput
                        maxLength={1}
                        style={styles.input}
                        name="two"
                        value={this.state.two}
                        onChangeText={(e) => {
                            this.setState({ two: e });
                        }}
                    />
                    <TextInput
                        maxLength={1}
                        style={styles.input}
                        name="three"
                        value={this.state.three}
                        onChangeText={(e) => {
                            this.setState({ three: e });
                        }}
                    />
                    <TextInput
                        maxLength={1}
                        style={styles.input}
                        name="four"
                        value={this.state.four}
                        onChangeText={(e) => {
                            this.setState({ four: e });
                        }}
                    />
                </View>

                <View>
                    {/* On press handler need to be modified by directing it to the next page */}
                    <Button style={styles.btn} title="Verify" onPress={() => {
                        Alert.alert('verified');
                        this.props.navigation.navigate('Dashboard')
                    }} />
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    Text: {
        fontWeight: "600",
        fontSize: 35,
    },
    container0: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center'
    },
    container1: {
        flex: 0.3,
        justifyContent: "space-evenly",
        flexDirection: "row",
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
        width: '15%',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        margin: '2.5%'
    }
});
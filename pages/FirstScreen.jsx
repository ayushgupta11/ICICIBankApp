import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Picker, Slider } from 'react-native';
import { Constants } from 'expo';
export default class SetPin extends React.Component {
    constructor() {
        super();
        this.state = { pin: '' }
    }
    onChangeText(value) {
        this.setState({
            pin: value,
        });
    }
    render() {
        return (
            <>
                <View style={{ flex: 0.5, backgroundColor: '#0099ff' }}></View>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#0099ff', }}>
                    <Text></Text>
                    <TextInput required style={styles.box} placeholder="Enter Pin" onChangeText={(value) => {
                        this.onChangeText(value);
                    }} /><Text> </Text>
                    <TextInput required style={styles.box} placeholder="Confirm Pin" onChangeText={(value) => {
                        this.onChangeText(value);
                    }} />
                    <Text
                        style={{
                            alignSelf: 'center',
                        }}>

                    </Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title="set Pin" color="green" onPress={() => { alert("Pin set Successfully !! " + this.state.pin) }}>Button2</Button>
                </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0099ff',
    },
    box: {
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        width: 200
    },
    backgroundVideo: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    buttonStyle: {
    }
});
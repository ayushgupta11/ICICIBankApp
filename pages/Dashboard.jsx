import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, SafeAreaView } from "react-native";


function Dashboard({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.btnStyles}
                onPress={() => navigation.navigate('Cards')}>
                <Text style={styles.txtStyles}>Manage Cards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyles}
                onPress={() => navigation.navigate('Transactions')}>
                <Text style={styles.txtStyles}>Recent Transactions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyles}
                onPress={() => navigation.navigate('Loans')}>
                <Text style={styles.txtStyles}>Loans</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    btnStyles: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: 200,
        margin: 10
    },
    txtStyles: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Dashboard;
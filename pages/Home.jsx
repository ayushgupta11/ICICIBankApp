import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Widget from '../components/Widget'

export default function Home() {
    return (
        <View style={styles.container}>
            <Widget />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
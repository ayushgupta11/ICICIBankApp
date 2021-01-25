import React from 'react'
import {
    Text,
    View,
    StyleSheet
  } from 'react-native';
  import Card from '../components/Card'

export default function Loans({
    navigation
}) {
    return (
        <View style={styles.container}>
            <Card
                title={'Loan Account'}
            />
            <Card
                title={'Forex & Travel Cards'}
                hideBody={true}
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10
    }
  });
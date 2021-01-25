import React from 'react'
import { View, Text, StyleSheet, ScrollView  } from 'react-native'
import Card from '../components/Card'


export default function LoansMenu() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text>Why would you like to apply?</Text>
                <Text>
                    I authorize ICICI Bank & it's representatives to call or SMS me with reference to my application.
                </Text>
            </View>
            <View>
                <Card 
                    title={'Personal Loan'}
                    hideBody={true}
                />
                <Card 
                    title={'Track Application'}
                    hideBody={true}
                />
                <Card 
                    title={'Pay Later'}
                    hideBody={true}
                />
                <Card 
                    title={'Credit Card'}
                    hideBody={true}
                />
                <Card 
                    title={'PPF Account'}
                    hideBody={true}
                />
                <Card 
                    title={'NPS'}
                    hideBody={true}
                />
                <Card 
                    title={'Home Loan'}
                    hideBody={true}
                />
                <Card 
                    title={'Car Loan'}
                    hideBody={true}
                />
                <Card 
                    title={'General Insurance'}
                    hideBody={true}
                />
                <Card 
                    title={'Life Insurance'}
                    hideBody={true}
                />
                <Card 
                    title={'Fixed Deposit'}
                    hideBody={true}
                />
                <Card 
                    title={'Savings Account'}
                    hideBody={true}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    header:{
        padding: 20
    }
});
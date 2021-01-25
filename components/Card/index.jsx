import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Card({
    title,
    hideBody,
    navigation
}) {
    const [show, setShow] = useState(true)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
                <Text onPress={
                    hideBody?
                    () => navigation.navigate('Apply Now')
                    : () => setShow(!show)
                    }>
                    {
                        hideBody?
                        '>'
                        : show?
                        'Hide'
                        : 'Show'
                    }
                </Text>
            </View>
            {
                hideBody?
                null:
                show ?
                    <>
                        <View style={styles.desc}>
                            <Text style={styles.descText}>
                                You do not have any loan accounts.
                            </Text>
                            <Text style={styles.descText}>
                                I authorize ICICI Bank & it's representatives to call or SMS me with reference to my application.
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <View>
                                <Text style={styles.footerText}>Apply Now</Text>
                            </View>
                            <View>
                                <Text style={styles.footerText}>Track New Loan</Text>
                            </View>
                        </View>
                    </>
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#fff',
        fontSize: 20,
        borderColor: '#eee',
        borderWidth: 0.5,
        width: '100%'
    },
    header: {
        padding: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    desc: {
        padding: 20
    },
    descText: {
        color: '#333',
        fontSize: 12
    },
    footer: {
        padding: 10,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    footerText: {
        color: '#fff',
        fontSize: 15
    }
});

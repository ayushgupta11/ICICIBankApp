import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import colors from '../../common/color'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({ navigation }) {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.headerText}>Hello, User</Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                <View style={styles.headerRight}>
                    <Text style={styles.headerText}>Login</Text>
                    <Icon name="sign-in" style={styles.rightIcon} />
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    headerText: {
        color: colors.text,
        fontSize: 20
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2
    },
    rightIcon: {
        color: colors.text,
        left: 10,
        fontSize: 20
    }
})

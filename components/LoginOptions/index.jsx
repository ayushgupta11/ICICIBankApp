import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function LoginOptions() {
    const options = [
        { title: 'Option 1', icon: 'home' },
        { title: 'Option 2', icon: 'home' },
        { title: 'Option 3', icon: 'home' },
        { title: 'Option 4', icon: 'home' },
        { title: 'Option 5', icon: 'home' },
        { title: 'Option 6', icon: 'home' },
        { title: 'Option 7', icon: 'home' },
        { title: 'Option 8', icon: 'home' }
    ]
    return (
        <View style={styles.optionsContainer}>
            {
                options.map((option, index) => {
                    return(
                    <View key={index} style={styles.optionBox}>
                        <Icon name={option.icon} style={styles.optionIcon} />
                        <Text color="#333">{option.title}</Text>
                    </View>)
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    optionsContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    optionBox:{
        width: '25%',
        padding: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc'
    },
    optionIcon:{
        fontSize: 20,
        color: '#333'
    }
})
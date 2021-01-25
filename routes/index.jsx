import React from 'react'
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login'
import Home from '../pages/Home'
import Loans from '../pages/Loans'
import LoansMenu from '../pages/LoansMenu'
import Test from '../pages/Test'
import OTP from '../pages/OTP'
import Cards from '../pages/CardsScreen'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import FirstScreen from '../pages/FirstScreen'
import SetPin from '../pages/SetPin'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="FirstScreen" component={FirstScreen} />
                <Stack.Screen options={{ headerShown: false }} name="OTP" component={OTP} />
                <Stack.Screen options={{ headerShown: false }} name="SetPin" component={SetPin} />
                <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#134374', height: 80  },
                    headerTitleAlign: "center",
                    cardStyle: { backgroundColor: "transparent" },
                    animationEnabled: "true"
                }} />
                <Stack.Screen name="Cards" component={Cards} options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#134374', height: 80  },
                    headerTitleAlign: "center",
                    cardStyle: { backgroundColor: "transparent" },
                    animationEnabled: "true"
                }} />
                <Stack.Screen name="Transactions" component={Transactions} options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#134374', height: 80 },
                    headerTitleAlign: "center",
                    animationEnabled: "true"
                }} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Loans" component={Loans} />
                <Stack.Screen name="Apply Now" component={LoansMenu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

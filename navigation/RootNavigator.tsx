import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
    const isSIgnedIn = true;
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}} >
            {isSIgnedIn ? (
                <Stack.Screen name="Main" component={AppNavigator} />
            ) : (
                <Stack.Group></Stack.Group>
            )}
        </Stack.Navigator>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})
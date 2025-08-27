import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps';

const StartScreen = () => {
    const navigation = useNavigation();
    const mapView = useRef(null);
    const users = [
        {
            image: "https://images.unsplash.com/photo-1615804608236-8bfc65aea0b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Heyy!"
        },
        {
            image: "https://images.unsplash.com/photo-1615804608236-8bfc65aea0b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Haloo!"
        },
        {
            image: "https://images.unsplash.com/photo-1615804608236-8bfc65aea0b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Of Course!"
        },
    ]
    const BANGALORE_COORDS = {
        latitude: 12.9916987,
        longitude: 77.5945627,
    }

    const generateCircularPoints = (center, radius, numPoints) => {
        const points = [];
        const angleStep = (2 * Math.PI/numPoints);

        for (let i = 0; i < numPoints; i++){
            const angle = i * angleStep;
        }

    }


  

    const circularPoints = generateCircularPoints(BANGALORE_COORDS, 5, 6)

    return (
        <SafeAreaView className="flex-1 bg-white">
            <MapView>

            </MapView>
        </SafeAreaView>
    )
}

export default StartScreen

const styles = StyleSheet.create({})
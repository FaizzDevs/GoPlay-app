import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';

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
        latitude: -6.984283,
        longitude: 110.409358,
    }

    const generateCircularPoints = (center, radius, numPoints) => {
        const points = [];
        const angleStep = (2 * Math.PI/numPoints);

        for (let i = 0; i < numPoints; i++){
            const angle = i * angleStep;
            const latitude = center.latitude + (radius/111) * Math.cos(angle)
            const longitude = center.longitude + (radius / (111 * Math.cos(center.latitude))) * Math.sin(angle)
            points.push({ latitude, longitude })
        }

        return points;

    }
    const circularPoints = generateCircularPoints(BANGALORE_COORDS, 5, 6)

    return (
        <SafeAreaView className="flex-1 bg-white">
            <MapView
                ref={ mapView }
                initialRegion={{
                    latitude: BANGALORE_COORDS.latitude,
                    longitude: BANGALORE_COORDS.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                style={{ 
                    width: "100%", 
                    height: 400 
                }}
            >
                {circularPoints?.map((point, index) => {
                    const user = users[index % users.length]
                    return (
                        <Marker
                            key={index}
                            coordinate={point}
                        >
                            <View>
                                <Image 
                                    source={{ uri: user?.image }} 
                                    className="w-[70px] h-[70px] rounded-full"
                                    resizeMode="cover"
                                />
                            </View>
                            <View className="bg-white px-3 py-2 rounded-md mt-1">
                                <Text className="text-sm font-medium text-center">
                                    {user.description}
                                </Text>
                            </View>
                        </Marker>
                    )
                })}
            </MapView>
        </SafeAreaView>
    )
}

export default StartScreen

const styles = StyleSheet.create({})
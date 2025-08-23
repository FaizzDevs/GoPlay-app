import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Bell, MessageCircle } from 'lucide-react-native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const spotlightData = [
        {
            id: "10",
            image: "https://images.unsplash.com/photo-1641543602857-8e431372087a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHRlbm5pcyUyMGluZG98ZW58MHx8MHx8fDA%3D",
            text: "Learn Tennis",
            description: "Know More"
        },
        {
            id: "11",
            image: "https://images.unsplash.com/photo-1701871237912-1facf2d9304d?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Up Your Game",
            description: "Fine a coach"
        },
        {
            id: "12",
            image: "https://images.unsplash.com/photo-1720515226352-b0b1dec6813b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Hacks to Win",
            description: "Yes, Please!"
        },
        {
            id: "13",
            image: "https://images.unsplash.com/photo-1646827295336-3ca05d079085?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Spotify Playlist",
            description: "Show More"
        }
    ]
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="px-4 py-8 bg-white flex-row justify-between items-center border-b border-gray-200">
                <View className="flex-1">
                    <Text className="text-gray-400 text-xs">Location</Text>
                    <Text className="text-lg font-semibold">Jepara, Indonesia</Text>
                </View>

                <View className="flex-row gap-4 items-center ml-2">
                    <MessageCircle size={20} stroke="#333" />
                    <Bell size={20} stroke="#333" />
                    <Pressable>
                        <Image 
                            className="w-8 h-8 rounded-full"
                            source={{ 
                                uri: "https://reactnative.dev/img/tiny_logo.png" 
                            }} 
                        />
                    </Pressable>
                </View>
            </View>

            <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
                <View className="bg-[#F4F4F5] rounded-2xl p-4 mt-4 flex-row items-center justify-between">
                    <View>
                        <Text className="text-lg font-semibold">Set your Weekly Fit Goal 🔥</Text>
                        <Text className="text-sm text-gray-500">KEEP YOURSELF FIT</Text>
                    </View>
                    <Text className="text-3xl">➡️</Text>
                </View>

                <View className="bg-white border border-gray-200 rounded-2xl p-4 mt-4 shadow-sm relative">
                    <Text className="text-sm font-semibold text-gray-400">START PLAYING!</Text>

                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text className="text-xl font-semibold mt-2">Create Game</Text>
                            <Text className="text-base text-gray-500 mt-1">No Upcoming games in your calendar</Text>
                        </View>

                        <TouchableOpacity className="bg-white px-4 py-2 border border-gray-300 rounded-md">
                            <Text className="text-base font-semibold">Create</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="mt-3 self-center">
                        <Text className="text-[#222] font-semibold underline text-base">View My Calendar</Text>
                    </TouchableOpacity>
                    
                </View>

                <View className="bg-[#F9FAFB] mt-5 rounded-2xl p-4 space-y-4">
                    <TouchableOpacity className="flex-row items-center justify-between">
                        <View className="flex-row items-center gap-3">
                            <View className="bg-green-100 p-2 rounded-full">
                                <Text className="text-xl">👥</Text>
                            </View>
                            <View>
                                <Text className="font-semibold text-lg text-gray-800">
                                    Groups
                                </Text>
                                <Text className="text-sm text-gray-500">
                                    Connect, Compete and Discuss
                                </Text>
                            </View>
                        </View>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex-row items-center justify-between mt-6">
                        <View className="flex-row items-center gap-3">
                            <View className="bg-yellow-100 p-2 rounded-full">
                                <Text className="text-xl">💡</Text>
                            </View>
                            <View>
                                <Text className="font-semibold text-lg text-gray-800">
                                    Game Time Activities
                                </Text>
                                <Text className="text-sm text-gray-500">
                                    410 Playo hosted games
                                </Text>
                            </View>
                        </View>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-between mt-5">
                    <TouchableOpacity className="w-[48%] bg-white rounded-2xl border border-gray-200 p-4">
                        <Text className="font-semibold text-base text-black">
                            Bookings
                        </Text>
                        <Text className="text-sm text-gray-500">
                            Game History
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-[48%] bg-white rounded-2xl border border-gray-200 p-4">
                        <Text className="font-semibold text-base text-black">
                            PlayPals
                        </Text>
                        <Text className="text-sm text-gray-500">
                            Manage Players
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-xl font-bold mt-6 mb-2">SpotLight</Text>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {spotlightData.map((item, index) => (
                        <TouchableOpacity 
                            key={item.id}
                            className="mr-4 bg-white rounded-xl w-48 overflow-hidden shadow-lg"
                        >
                            <Image
                                source={{ uri: item.image }}
                                className="w-full h-56"
                                resizeMode="cover"
                            />
                            <View className="p-3">
                                <Text className="font-bold text-gray-800 text-base">
                                    {item?.text}
                                </Text>
                                <Text className="text-sm text-gray-600">
                                    {item?.description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View className="items-center mt-5 mb-6">
                    <Text className="text-sm text-gray-500">FOLLOW US ON</Text>
                    <View className="flex-row gap-4 mt-2">
                        <Text className="text-lg">📷</Text>
                    </View>
                </View>

                <View className="bg-[#F9FAFB] rounded-2xl p-4 mb-6 flex-row items-center">
                    <View className="bg-gray-100 p-3 rounded-full mr-3">
                        <Text className="text-xl">🎁</Text>
                    </View>

                    <View className="flex-1">
                        <Text className="font-semibold text-base">
                            Refer a Sports Enthusiast
                        </Text>
                        <Text className="text-sm text-gray-600">
                            Earn <Text className="text-blue-500">50 karma points</Text> by inviting your friends
                        </Text>
                    </View>
                </View>

                <View className="items-center mb-10 mt-4">
                    <Text className="text-2xl font-bold text-[#14b8a6]">GoPlay</Text>
                    <Text className="text-sm to-gray-500 mt-1">Your Sport Community App</Text>

                    <View className="flex-row items-center gap-1 mt-2">
                        <TouchableOpacity>
                            <Text className="text-sm text-blue-500 underline">Private Policy</Text>
                        </TouchableOpacity>
                        <Text className="text-gray-400"> ● </Text>
                        <TouchableOpacity>
                            <Text className="text-sm text-blue-500 underline">Terms of Service</Text>
                        </TouchableOpacity>
                        <Text className="text-gray-400"> ● </Text>
                        <TouchableOpacity>
                            <Text className="text-sm text-blue-500 underline">FAQ's</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
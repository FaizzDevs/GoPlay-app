import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import { Book, Calendar, Edit, Gift, HelpCircle, LogOut, Settings, Share2, Users, Wallet } from 'lucide-react-native'

const ProfileScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <ScrollView>
                <View className="bg-[#294461] p-4 py-8">
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Image
                                source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
                                className="w-16 h-16 rounded-full mr-4"
                            />

                            <View>
                                <Text className="text-white text-xl font-bold">
                                    Faiz Dev's
                                </Text>
                                <Text className="text-white text-sm">
                                    150 Karma Points
                                </Text>
                            </View>
                        </View>
                        <TouchableHighlight>
                            <Edit color={"white"} size={24} />
                        </TouchableHighlight>
                    </View>
                </View>

                <View className="px-4 mt-4">
                    <View className="bg-white rounded-xl p-4 shadow-sm">

                        {/* My bookings */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <Calendar color={"green"} size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    My Bookings
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                    View Transactions & Receipts
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* Play Pals */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <Users color={"green"} size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    Play Pals
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                    View & Manage Players
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* PassBooks */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <Wallet color={"green"} size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    PassBooks
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                    Manage Karma, Playo Credit
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* preference */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <Settings color={"green"} size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    Preference & Privacy
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                    Manage Your Settings
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* second section */}
                       
                    </View>
                </View>

                <View className="px-4 mt-4 mb-6">
                    <View className="bg-white rounded-xl p-4 shadow-sm">

                        {/* offers */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <Gift color="green" size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    Offers
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                    View Available Discounts
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* blogs */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <Book color="green" size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    Blogs
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                    Read Latest Articles
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* invite */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <Share2 color="green" size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    Invite & Earn
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                    Refer Friends for Rewards
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* help & support */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <HelpCircle color="green" size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    Help & Support
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                   Get Assistance
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />

                        {/* logout */}
                        <TouchableOpacity className="flex-row items-center py-3">
                            <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-4">
                                <LogOut color="red" size={24} />
                            </View>

                            <View className="flex-1">
                                <Text className="text-gray-800 text-base font-semibold">
                                    Logout
                                </Text>
                                <Text className="text-gray-500 text-sm">
                                   Sign Out of Your Account
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View className="h-px bg-gray-200 my-2" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
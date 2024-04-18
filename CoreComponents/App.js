import { View, Text, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

const logoImg = require("./assets/favicon.png")

export default function App() {
  return (
  <View className="items-center justify-center flex-1 bg-purple-700">
    <StatusBar style="auto" />
    <Text className="text-5xl font-bold text-white">Hello World</Text>
    <Image source={logoImg} className="w-20 h-20"/>
  </View>
  )
}




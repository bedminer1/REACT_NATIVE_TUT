import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
  <View className="flex-1 justify-center items-center bg-purple-800">
    <StatusBar style="auto" />
    <Text>Hello World</Text>
    <View className="w-20 h-20 bg-blue-600">

    </View>
  </View>
  )
}



import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function App() {
  return (
    <View style={tailwind("flex-1 bg-white items-center justify-center")}>
      <Text>Hello World</Text>
      <StatusBar style='auto' />
    </View>
  );
}

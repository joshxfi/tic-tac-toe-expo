import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import { Board } from "./components/Board";

export default function App() {
  return (
    <View style={tailwind('flex-1 bg-white items-center justify-center')}>
      <Board />
      <StatusBar style='auto' />
    </View>
  );
}

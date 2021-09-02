import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import { Board } from "./components/Board";

export default function App() {
  const possibleDefeat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return (
    <View style={tailwind("flex-1 bg-white items-center justify-center")}>
      <Board />
      <StatusBar style='auto' />
    </View>
  );
}

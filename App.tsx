import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import tailwind from 'tailwind-rn';
import { Game } from './components/Game';

export default function App() {
  return (
    <View style={tailwind('flex-1 bg-white items-center justify-center')}>
      <Game />
      <StatusBar style='auto' />
    </View>
  );
}

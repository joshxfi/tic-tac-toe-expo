import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

export const Board = () => {
  return (
    <View style={tailwind('')}>
      <View style={tailwind('flex-row')}>
        <Box />
        <Box />
        <Box />
      </View>

      <View style={tailwind('flex-row')}>
        <Box />
        <Box />
        <Box />
      </View>

      <View style={tailwind('flex-row')}>
        <Box />
        <Box />
        <Box />
      </View>
    </View>
  );
};

const Box = () => {
  return (
    <TouchableOpacity
      style={tailwind(
        'border-4 rounded-lg border-black w-28 h-28 items-center justify-center'
      )}
    >
      <Text style={tailwind('text-4xl font-bold')}>X</Text>
    </TouchableOpacity>
  );
};

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

export const Board = () => {
  const [history, setHistory] = useState<string[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<boolean>(true);

  const onPress = (id: number) => {
    const copyHistory = { ...history };
    copyHistory[id] = turn ? 'X' : 'O';
    setHistory(copyHistory);
    setTurn(!turn);
  };

  const square = (id: number) => {
    return <Box value={history[id]} handlePress={() => onPress(id)} />;
  };

  return (
    <View style={tailwind('')}>
      <View style={tailwind('flex-row')}>
        {square(0)}
        {square(1)}
        {square(2)}
      </View>

      <View style={tailwind('flex-row')}>
        {square(3)}
        {square(4)}
        {square(5)}
      </View>

      <View style={tailwind('flex-row')}>
        {square(6)}
        {square(7)}
        {square(8)}
      </View>
    </View>
  );
};

const Box: React.FC<BoxProps> = ({ handlePress, value }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={tailwind(
        'border-4 rounded-lg border-black w-28 h-28 items-center justify-center'
      )}
    >
      <Text style={tailwind('text-4xl font-bold')}>{value}</Text>
    </TouchableOpacity>
  );
};

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';

const playground = () => Array(9).fill('');

const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateGame = (h: string[]) => {
  for (let i = 0; i < possibleWins.length; i++) {
    const [a, b, c] = possibleWins[i];

    if (h[a] && h[a] === h[b] && h[a] === h[c]) {
      return h[a];
    }
  }
  return '';
};

export const Game = () => {
  const [gameStatus, setGameStatus] = useState<string[]>(playground);
  const [turn, setTurn] = useState<boolean>(true);

  const isFull = () => {
    for (let i = 0; i < gameStatus.length; i++) {
      if (gameStatus[i] !== null) return false;
    }
  };

  const winner = isFull() ? 'draw' : calculateGame(gameStatus);

  const onPress = (id: number) => {
    if (!winner && !gameStatus[id]) {
      const copyGameStatus = { ...gameStatus };
      copyGameStatus[id] = turn ? 'X' : 'O';
      setGameStatus(copyGameStatus);
      setTurn(!turn);
    }
  };

  const square = (id: number) => {
    return <Box value={gameStatus[id]} handlePress={() => onPress(id)} />;
  };

  return (
    <View>
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

      <View style={tailwind('flex-row mb-4')}>
        {square(6)}
        {square(7)}
        {square(8)}
      </View>

      <View style={tailwind('ml-2')}>
        {winner ? (
          <Text style={tailwind('text-xl font-bold')}>Winner: {winner}</Text>
        ) : (
          <Text style={tailwind('text-xl font-bold')}>
            Turn: {turn ? 'X' : 'O'}
          </Text>
        )}

        <Text
          style={tailwind('text-xl font-bold')}
          onPress={() => setGameStatus(Array(9).fill(null))}
        >
          Restart
        </Text>
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

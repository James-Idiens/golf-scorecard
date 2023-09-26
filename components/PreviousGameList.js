import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getPreviousGames } from '../utilities/storage'

export default function PreviousGameList({ previousGames }) {
  return (
    <View>
      <Text>Previous Games:</Text>
      {previousGames.map((item) => (
        <View key={item.gameKey}>
          <Text>Game Key: {item.gameKey}</Text>
          {item.gameData && typeof item.gameData === 'object' ? (
            Object.keys(item.gameData).map((holeKey) => (
              <View key={holeKey}>
                <Text>
                  Hole {parseInt(holeKey.split('_')[1])} Score: {item.gameData[holeKey]}
                </Text>
              </View>
            ))
          ) : (
            <Text>No game data available</Text>
          )}
        </View>
      ))}
    </View>
  )
}

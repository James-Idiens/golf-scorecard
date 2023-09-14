import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Link } from 'expo-router'
import { useHoleScore } from '../../hooks/GetScore'

export default function Hole1() {
  const { score, setScore, saveUserScore } = useHoleScore(1)

  return (
    <View>
      <Text>Hole 1</Text>
      <Text>Par: 4</Text>
      <Text>Metres: 286</Text>
      <Text>Stroke Index: 14</Text>
      <TextInput
        placeholder="Score"
        value={score}
        onChangeText={(text) => setScore(text)}
        keyboardType="numeric"
      />
      <Button label="Save Score" onPress={saveUserScore} />
      <Button label="Previous Hole" disabled={true} />{' '}
      <Link href="/hole/2">
        <Button label="Next Hole" />
      </Link>
    </View>
  )
}

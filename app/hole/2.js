import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { Link } from 'expo-router'
import { useHoleScore } from '../../hooks/GetScore'

export default function Hole2() {
  const { score, setScore, saveUserScore } = useHoleScore(2)

  return (
    <View>
      <Text>Hole 2</Text>
      <Text>Par: 4</Text>
      <Text>Metres: 338</Text>
      <Text>Stroke Index: 5</Text>
      <TextInput
        placeholder="Score"
        value={score}
        onChangeText={(text) => setScore(text)}
        keyboardType="numeric"
      />
      <Button label="Save Score" onPress={saveUserScore} />
      <Link href="/hole/1">
        <Button label="Previous Hole" />
      </Link>
      <Link href="/hole/3">
        <Button label="Next Hole" />
      </Link>
    </View>
  )
}

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Hole1() {
  const [score, setScore] = useState('');

  const saveScore = () => {
    // Implement code to save the user's score for Hole 1.
    // You can use AsyncStorage or any other data storage method.
  };

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
        keyboardType="numeric" // Allow only numeric input
      />
      <Button title="Save Score" onPress={saveScore} />
      <Button title="Previous Hole" disabled={true} /> {/* Disable the Previous Hole button for Hole 1 */}
      <Link href="/hole/2">Next Hole</Link>
    </View>
  );
}

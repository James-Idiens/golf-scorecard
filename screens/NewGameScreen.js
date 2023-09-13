import { View, Text } from 'react-native';
import { Button } from 'react-native-web';

export default function NewGameScreen() {
  return (
    <View>
      <Text>Start a New Game</Text>
      <Button title="Start Game" />
    </View>
  );
}
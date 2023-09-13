import { View, Text } from 'react-native';
import NewGameScreen from '../screens/NewGameScreen';

export default function Home() {
  return (
    <View>
      <Text>Home Page</Text>
      {/* Display a list of previous games played here */}
      <NewGameScreen />
    </View>
  )
}
import { View, Text } from 'react-native';
import { Button } from 'react-native-web';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View>
      <Text>Home Page</Text>
      {/* Display a list of previous games played here */}
      <Link href='/hole/1' asChild>
      <Button title="Start Game"/>
      </Link>
    </View>
  )
}
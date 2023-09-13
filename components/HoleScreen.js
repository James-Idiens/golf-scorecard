import { View, Text, TextInput, Button } from 'react-native';

export default function HoleScreen({ route, navigation }) {
  const { holeNumber } = route.params;
  const [par, setPar] = useState('');
  const [score, setScore] = useState('');

  // Implement the UI for hole scoring here
  

  return (
    <View>
      <Text>Hole {holeNumber}</Text>
      <TextInput
        placeholder="Par"
        value={par}
        onChangeText={(text) => setPar(text)}
      />
      <TextInput
        placeholder="Score"
        value={score}
        onChangeText={(text) => setScore(text)}
      />
      <Button title="Previous Hole" onPress={() => navigation.goBack()} />
      <Button title="Next Hole" onPress={() => navigation.navigate('Hole', { holeNumber: holeNumber + 1 })} />
    </View>
  );
}

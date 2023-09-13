import { View, Text } from 'react-native';

export default function ScoreCard({ route }) {
  const { gameId } = route.params;

  // Fetch game data for gameId here from storage

  return (
    <View>
      <Text>Game Scorecard</Text>
      {/* Display the scorecard data here */}
    </View>
  );
}

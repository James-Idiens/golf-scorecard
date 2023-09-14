import { View, Text, TextInput, Pressable } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'
import { useHoleScore } from '../../hooks/GetScore'
import commonStyles from './styles'
import { holeDetails } from '../../utilities/holeDetails'

export default function Hole() {
  const { holeNumber } = useLocalSearchParams()
  const { score, setScore, saveUserScore } = useHoleScore(holeNumber)
  const holeInfo = holeDetails[holeNumber]

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerText}>{holeInfo.name}</Text>
      </View>
      <View style={commonStyles.description}>
        <Text style={commonStyles.descriptionText}>Par: {holeInfo.par}</Text>
        <Text style={commonStyles.descriptionText}>Metres: {holeInfo.meters}</Text>
        <Text style={commonStyles.descriptionText}>Stroke Index: {holeInfo.strokeIndex}</Text>
      </View>
      <View style={commonStyles.inputContainer}>
        <TextInput
          style={commonStyles.input}
          placeholder="Score"
          value={score}
          onChangeText={(text) => setScore(text)}
          keyboardType="numeric"
        />
      </View>
      <Pressable style={commonStyles.saveButton} onPress={saveUserScore}>
        <Text style={commonStyles.buttonText}>Save Score</Text>
      </Pressable>
      <View style={commonStyles.buttonContainer}>
        {holeNumber !== '1' && (
          <Link href={`/hole/${parseInt(holeNumber) - 1}`} asChild>
            <Pressable style={commonStyles.navButton}>
              <Text style={commonStyles.buttonText}>Previous Hole</Text>
            </Pressable>
          </Link>
        )}
        {holeNumber !== '18' && (
          <Link href={`/hole/${parseInt(holeNumber) + 1}`} asChild>
            <Pressable style={commonStyles.navButton}>
              <Text style={commonStyles.buttonText}>Next Hole</Text>
            </Pressable>
          </Link>
        )}
      </View>
    </View>
  )
}

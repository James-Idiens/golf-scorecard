import { View, Text, TextInput, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { useHoleScore } from '../../hooks/GetScore'
import commonStyles from './styles'

export default function Hole1() {
  const { score, setScore, saveUserScore } = useHoleScore(1)

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerText}>Hole 1</Text>
      </View>
      <View style={commonStyles.description}>
        <Text style={commonStyles.descriptionText}>Par: 4</Text>
        <Text style={commonStyles.descriptionText}>Metres: 286</Text>
        <Text style={commonStyles.descriptionText}>Stroke Index: 14</Text>
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
        <Pressable style={commonStyles.navButton} disabled={true}>
          <Text style={commonStyles.buttonText}>Previous Hole</Text>
        </Pressable>
        <Link href="/hole/2" asChild>
          <Pressable style={commonStyles.navButton}>
            <Text style={commonStyles.buttonText}>Next Hole</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

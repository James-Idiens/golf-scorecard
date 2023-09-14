import AsyncStorage from '@react-native-async-storage/async-storage'

export async function saveScore(holeNumber, score) {
  try {
    await AsyncStorage.setItem(`hole_${holeNumber}_score`, score.toString())
    console.log('Score saved successfully.')
  } catch (error) {
    console.error('Error saving score:', error)
  }
}

export async function getScore(holeNumber) {
  try {
    const score = await AsyncStorage.getItem(`hole_${holeNumber}_score`)
    if (score !== null) {
      return score
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting score:', error)
  }
}

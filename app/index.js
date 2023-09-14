import { StyleSheet, Pressable, View, Text } from 'react-native'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href="/hole/1" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Start Game</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20, // Adjust the distance from the bottom as needed
    right: 20, // Adjust the distance from the right as needed
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

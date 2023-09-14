import { StyleSheet } from 'react-native'

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
    width: '50%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  input: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  saveButton: {
    backgroundColor: 'green',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  navButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginBottom: 20,
    paddingVertical: 15,
  },
  homeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    zIndex: 999, // Ensures it's above other elements
  },
})

export default commonStyles

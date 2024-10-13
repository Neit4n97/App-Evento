import { Button, StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 25
    },
    fisioAgora: {
      color: 'white',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48
    },
    observation: {
      color: 'gray',
      fontSize: 16
    },
    input: {
      flex: 1,
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    loginText: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center'

    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        width: 60,
        padding: 2,
        margin: 5
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button2: {
        width: 56,
        height: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center'
    }
  
  })
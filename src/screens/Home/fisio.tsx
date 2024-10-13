import {Text, View, TextInput, TouchableOpacity, Image} from "react-native";
import {styles} from './styles'
export function Fisio(){
  return (
    
    <View style={styles.container}>
      <Image source={require('src\screens\img\Logo-letra.PNG')}/>
      <Text style={styles.fisioAgora}>Físio Agora!</Text>
      <Text style={styles.observation}> developed in React Native </Text>

    <TextInput style={styles.input}
    placeholder="E-mail"
    placeholderTextColor="#6b6b6b"
    keyboardType="email-address"
    />
    <TextInput style={styles.input}
    placeholder="Senha"
    placeholderTextColor="#6b6b6b"
    />

    <TouchableOpacity style={styles.button}>
        <Text style={styles.loginText}>
            Login
        </Text>
    </TouchableOpacity>
    </View>
  )
}
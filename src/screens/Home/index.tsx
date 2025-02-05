import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { useState } from "react";
import {styles} from './styles'
import { Fisio } from "./fisio";
import { Participant } from "../../components/Participant";

export function Home(){
  const [participants, setParticipants] = useState<string[]>(['']);
  const [participantName, setParticipantName] = useState('');

    
    function handlerParticipantAdd(name: string){
      if(participants.includes(participantName)){
        return Alert.alert("Participante Ja cadastrado", "Já existe um participante na lista com este nome.")
      }

      setParticipants(prevState => [...prevState, participantName])
      setParticipantName('')
    }

    function handlerParticipantRemove(name: string){
      Alert.alert("Remover", `Deseja remover o participante ${name} ?`, [
        {
          text: 'Sim',
          onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }
  return (
    <View style={styles.container}>
      <Text style={styles.fisioAgora}>Nome do Evento</Text>
      <Text style={styles.observation}> developed in React Native</Text>

      <View style={styles.form}>
      <TextInput style={styles.input}
    placeholder="Nome do participante"
    placeholderTextColor="#6b6b6b"
    onChangeText={setParticipantName}
    value={participantName}
    />

    <TouchableOpacity style={styles.button2} onPress={() => handlerParticipantAdd('')}>
        <Text style={styles.buttonText}>
            +
        </Text>
    </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant
              key={item}
              name={item} 
              onRemove={() => handlerParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou a sua festa ainda? Adicione participantes a sua lista de presença!
          </Text>
        )}
      />
    </View>
  )
}
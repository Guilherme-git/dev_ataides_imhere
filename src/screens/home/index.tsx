import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/participant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dialog from "react-native-dialog";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [showDialog, setShowDialog] = useState(false)
  const [nameParticipant, setNameParticipant] = useState('');
  const [nameEvent, setNameEvent] = useState('Nome do evento');

  useEffect(() => {
    const response = async () => {
      const value = await AsyncStorage.getItem('@dev_ataides_imhere_nameevent')
      if(!value) {
        return setNameEvent('Nome do evento')
      }
      setNameEvent(value)
    }
    response()
  }, [])

  const handleParticipantAdd = async () => {
    if (!nameParticipant) {
      return Alert.alert("Adicionar participante", "Primeiro informe o nome do participante")
    }
    if (participants.includes(nameParticipant)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
    }
    setParticipants([...participants, nameParticipant])
    setNameParticipant('')
  }

  const handleParticipantRemove = (name: string) => {
    setParticipants(state => state.filter(item => item !== name))

    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(state => state.filter(item => item !== name))
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ])
  }

  const handleNomeEvent = async () => {
    await AsyncStorage.setItem('@dev_ataides_imhere_nameevent', nameEvent)
    return setShowDialog(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerEventName}>
        <Text style={styles.eventName}>{nameEvent}</Text>

        <TouchableOpacity style={styles.handleNameEventBtn} onPress={() => setShowDialog(true)}>
          <Text style={styles.handleNameEventText}>Alterar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.eventDate}>{new Date().getFullYear()}</Text>

      <View style={styles.form}>
        <TextInput
          value={nameParticipant}
          onChangeText={t => setNameParticipant(t)}
          placeholder='Nome do participante'
          placeholderTextColor={'#6b6b6b'}
          style={styles.input} />

        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no envento ainda? Adicione participantes a sua lista presença.</Text>
        )}
      />


      <Dialog.Container visible={showDialog}>
        <Dialog.Title>Nome do evento</Dialog.Title>
      
        <Dialog.Input
          placeholder='Digite o nome do evento'
          onChangeText={t => setNameEvent(t)} />
        <Dialog.Button label="Salvar" onPress={handleNomeEvent} />
        <Dialog.Button label="Fechar" onPress={() => setShowDialog(false)} />
      </Dialog.Container>


    </View>
  );
}
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Button from './Button';
import axios from 'axios';

const Form = ({ onSave }) => {
  const [name, setName] = useState('');
  const [rg, setRg] = useState('');
  const [days, setDays] = useState('');
  const [event, setEvent] = useState('');
  const [observation, setObservation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    const item = {
      name,
      rg,
      days,
      event,
      observation,
    };

    axios
    .post('http://192.168.15.7:8000/api/items', item)
    .then(response => {
      onSave(response.data);
      setName('');
      setRg('');
      setDays('');
      setEvent('');
      setObservation('');
    })
    .catch(error => {
      console.error('Erro ao salvar o item:', error);
    });

  };

  return (
    <View style={styles.container}>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={text => {
          setName(text);
          setErrorMessage('');
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="RG"
        value={rg}
        onChangeText={text => {
          setRg(text);
          setErrorMessage('');
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Dias"
        value={days}
        onChangeText={text => {
          setDays(text);
          setErrorMessage('');
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Evento"
        value={event}
        onChangeText={text => {
          setEvent(text);
          setErrorMessage('');
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Observação"
        value={observation}
        onChangeText={text => {
          setObservation(text);
          setErrorMessage('');
        }}
        multiline
      />
      <Button
        title="Salvar"
        onPress={handleSave}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dab15a',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ffa500',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Form;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../components/Form'; // Importar o componente Form corretamente

const FormScreen = ({ navigation }) => {
  const handleSave = (item) => {
    // Aqui você pode salvar o item ou realizar outras ações necessárias
    console.log(item);
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Form onSave={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default FormScreen;

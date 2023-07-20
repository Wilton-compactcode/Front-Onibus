import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const handleNavigateToList = () => {
    navigation.navigate('List');
  };

  const handleNavigateToForm = () => {
    navigation.navigate('Form');
  };

  return (
    <View style={styles.container}>
    <Image source={require('../../assets/logo.png')} style={styles.logo} />
    <Button
      title="Listar Itens"
      onPress={handleNavigateToList}
      style={styles.button}
      icon={() => <Icon name="list" size={20} color="blue" />}
    />
    <View style={styles.separator} />
    <Button
      title="Adicionar Item"
      onPress={handleNavigateToForm}
      style={styles.button}
      icon={() => <Icon name="plus" size={20} color="blue" />}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  button: {
    marginBottom: 3,
  },
  separator: {
    height: 3,
  },
});

export default HomeScreen;

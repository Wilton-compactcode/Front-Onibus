import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
=======
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
import axios from 'axios';

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 15);
};

const List = () => {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
<<<<<<< HEAD
      .get('http://192.168.15.7:5000/api/items')
=======
      .get('http://localhost:5000/api/items')
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os itens:', error);
      });
  };

<<<<<<< HEAD
  const handleEditItem = (item) => {
    setEditingItem({ ...item, id: item.id }); // Copia todos os campos do item, incluindo o id
    setModalVisible(true);
  };

  const handleDeleteItem = (itemId) => {
    axios.delete(`http://192.168.15.7:5000/api/items/${itemId}`)
      .then(() => {
        console.log('Item deleted successfully');
        fetchData();
=======
  const handleEditItem = (itemId) => {
    // Implement your edit logic here, e.g., navigation to the edit screen
    console.log('Edit item with ID:', itemId);
  };

  const handleDeleteItem = (itemId) => {
    // Implement your delete logic here, e.g., send a delete request to the API
    axios.delete(`http://localhost:5000/api/items/${itemId}`)
      .then(() => {
        console.log('Item deleted successfully');
        fetchData(); // Fetch updated data after deletion
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
      })
      .catch(error => {
        console.error('Erro ao deletar o item:', error);
      });
  };

<<<<<<< HEAD
  const handleUpdateItem = () => {
    const updatedData = {
      name: editingItem.name.substring(0, 200),
      rg: editingItem.rg.substring(0, 15),
      days: editingItem.days.substring(0, 200),
      event: editingItem.event.substring(0, 100),
      observation: editingItem.observation.substring(0, 200),
    };
  
    
    axios.patch(`http://192.168.15.7:5000/api/items/${editingItem.id}`, updatedData)
      .then(response => {
        console.log('Item atualizado com sucesso:', response.data);
  
       
        fetchData();
        setModalVisible(false);
      })
      .catch(error => {
        console.error('Erro ao atualizar o item:', error);
        
      });
  };
  

  const renderItem = ({ item }) => (
    <View key={item.id || generateUniqueId()} style={styles.item}>
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>RG: {item.rg}</Text>
      <Text style={styles.text}>Days: {item.days}</Text>
      <Text style={styles.text}>Event: {item.event}</Text>
      <Text style={styles.text}>Observation: {item.observation}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleEditItem(item)}
      >
        <Text style={styles.buttonText}>Edit</Text>
=======
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.rg}</Text>
      <Text>{item.days}</Text>
      <Text>{item.event}</Text>
      <Text>{item.observation}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleEditItem(item.id)}
      >
        <Text>Edit</Text>
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDeleteItem(item.id)}
      >
<<<<<<< HEAD
        <Text style={styles.buttonText}>Delete</Text>
=======
        <Text>Delete</Text>
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
<<<<<<< HEAD
        keyExtractor={(item, index) => item.id || generateUniqueId()}
=======
        keyExtractor={item => item.id.toString()}
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
        renderItem={renderItem}
      />

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {editingItem && (
            <View>
              <Text style={styles.modalTitle}>Edit Item</Text>
              <Text>Nome:</Text>
              <TextInput
                style={styles.input}
                value={editingItem.name}
                onChangeText={text => setEditingItem({ ...editingItem, name: text })}
              />

              <Text>RG:</Text>
              <TextInput
                style={styles.input}
                value={editingItem.rg}
                onChangeText={text => setEditingItem({ ...editingItem, rg: text })}
              />

              <Text>Dias:</Text>
              <TextInput
                style={styles.input}
                value={editingItem.days}
                onChangeText={text => setEditingItem({ ...editingItem, days: text })}
              />

              <Text>Evento:</Text>
              <TextInput
                style={styles.input}
                value={editingItem.event}
                onChangeText={text => setEditingItem({ ...editingItem, event: text })}
              />

              <Text>Observações:</Text>
              <TextInput
                style={styles.input}
                value={editingItem.observation}
                onChangeText={text => setEditingItem({ ...editingItem, observation: text })}
              />

              <Button title="Salvar" onPress={handleUpdateItem} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
<<<<<<< HEAD
  text: {
    marginBottom: 5,
  },
=======
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
  button: {
    marginTop: 5,
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
<<<<<<< HEAD
  buttonText: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginBottom: 10,
  },
=======
>>>>>>> faf3cf726547082b77930b77b9eeb761d0d4d61e
});

export default List;

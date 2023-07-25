import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:5000/api/items')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os itens:', error);
      });
  };

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
      })
      .catch(error => {
        console.error('Erro ao deletar o item:', error);
      });
  };

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
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDeleteItem(item.id)}
      >
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
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
  button: {
    marginTop: 5,
    backgroundColor: '#ccc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default List;

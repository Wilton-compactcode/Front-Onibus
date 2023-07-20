import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/Lista';

const ListScreen = () => {
  const [data, setData] = useState([]);

  const handleDelete = (itemId) => {
    setData(data.filter(item => item.id !== itemId));
  };

  return (
    <View style={styles.container}>
      <List data={data} onDelete={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ListScreen;

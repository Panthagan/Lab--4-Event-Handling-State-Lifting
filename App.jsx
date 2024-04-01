import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ToDoForm from './ToDoForm';
const App = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);

  const addTask = (taskText) => {
    setTasks((prevTasks) => [...prevTasks, taskText]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
      <ToDoForm addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
});

export default App;
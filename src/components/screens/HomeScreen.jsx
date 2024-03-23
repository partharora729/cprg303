import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CreateTodoList from './CreateTodoList';
import ToDoItemList from './ToDoItemList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ task, submitHandler, clickHandler }) => {
  return (
    <MainLayout>
    <View style={styles.container}>
      <CreateTodoList submitHandler={submitHandler} />
      <FlatList
        keyExtractor={(item) => item.task_id}
        data={task}
        renderItem={({ item }) => (
          <ToDoItemList clickHandler={clickHandler} item={item} />
        )}
      />
    </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;

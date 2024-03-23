import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput , Button} from 'react-native';
import Header from './src/components/header'
import TextInput from './src/components/CreateTodolist';
import CreateTodoList from './src/components/CreateTodolist';
import ToDoItemList from './src/components/ToDoItemList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
 
export default function App() {
  const Stack = createStackNavigator();

  const [task, setTask] = useState([
    { task_name: 'Wake up at 4AM', task_id: '1' },
    { task_name: 'Have coffee', task_id: '2' },
    { task_name: 'Take shower', task_id: '3' },
    { task_name: 'Prepare for CPRG303', task_id: '4' },
    { task_name: 'Have breakfast', task_id: '5' },
    { task_name: 'Deliver Lecture', task_id: '6' },
    { task_name: 'Prepare for CPRG307', task_id: '7' },
    { task_name: 'Deliver lecture on CPRG307', task_id: '8' },
  ]);
 
  const clickHandler = (task_id) => {
    console.log(task_id);
    setTask((prevTask) => {
      return prevTask.filter(task => task.task_id != task_id);
    })
  }
  const [text, setText] = useState("");
  const changeHandler =(val) =>{
    setText(val)
  }
  const submitHandler =(text)=>{
    setTask((prevTask)=>{
      return [{task_name:text,task_id:Math.random()},...prevTask]
    })
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    <View style={styles.container}>
      {/* <Text style={styles.header}>My ToDo list for Monday</Text> */}
      <Header/>
      {/* <TextInput placeholder='Enter task ...' onChangeText={changeHandler}  />
      <Button title="Add Task" onPress={()=>submitHandler(text)}/> */}
      <CreateTodoList submitHandler={submitHandler}/>
 
      {/* {task.map((item) => (<View key={item.task_id}><Text style={styles.list}>{item.task_name}</Text></View>))} */}
      <FlatList
        keyExtractor={(item) => item.task_id}
        data={task}
        renderItem={({ item }) => (
          < ToDoIemList clickHandler={clickHandler} item={item}/>
        )}
      />
    </View>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  list: {
 
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    backgroundColor: 'cyan',
    fontSize: 24,
  },
  header:{
    fontSize: 30,
    fontWeight: 'bold',
  }
});
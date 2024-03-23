import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
 
export default function App() {
  //define a state variable
  const [task, setTask]  = useState([
    {task_name:'Wake up at 4AM',task_id:1},  //item1
    {task_name:'Have Coffee',task_id:2},  //item2
    {task_name:'Go to Gym',task_id:3},    //item3
    {task_name:'Take Shower',task_id:4},
    {task_name:'have breakfast',task_id:5},
    {task_name:'Prepare for CPRG303 lecture',task_id:6},
    {task_name:'Deliver CPRG303 lecture',task_id:7},
    {task_name:'Prepare for cprg307',task_id:8},   //item8
  ])
 
 
  return (
    <View style={styles.container}>
      <Text>My ToDo List for Tuesday:</Text>
     
      {task.map((item)=>{return(<View><Text>{item.task_name}</Text></View>)})}
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
})
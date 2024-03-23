import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Pressable, TextInput } from 'react-native';
import welcome from './components/welcome';
export default function App() {
  return (
   <view style={styles.container}>
    <text>Register Here</text>
    <TextInput secureTextEntry="true" placeholder="Enter Username" style={styles.input}/>
    <TextInput placeholder="Enter Password" style={[styles.input, styles.margin]}/>
   </view>
   );
}
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
 
});

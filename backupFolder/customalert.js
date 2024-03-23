import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
 
export default function App() {
 
 
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert("Invalid email", " please enter @", [
        { text: 'Cancel', onPress: () => console.log("Cancel button clicked") }, { text: 'OK', onPress: () => console.log("OK button clicked") }
      ])}>
        <Text>Alert1</Text>
      </Pressable>
    </View>
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
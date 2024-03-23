import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
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
  image: {
    height: 200,
    width: 200,
  }
 
});

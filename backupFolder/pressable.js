import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableHighlight } from 'react-native';
 
export default function App() {
  const clickhandler=()=>{
    alert("You clicked the image")
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={clickhandler}>
      <Text>Hello World!!</Text>
      </Pressable>
      <TouchableHighlight activeOpacity={0.5} underlayColor='red' onPress={()=>console.log('text clicked')}>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
      </TouchableHighlight>
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

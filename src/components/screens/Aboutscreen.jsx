import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  // Get the current date
  const currentDate = new Date().toDateString();
  
  return (
    <MainLayout>
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.text}>App Name: To Do List And <Form></Form></Text>
      <Text style={styles.text}>Your Name: Parth Arora </Text>
      <Text style={styles.text}>Current Date: {currentDate}</Text>
    </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function ToDoItemList({item,clickHandler}) {
      
    return (
        <View style={styles.content}>
            <TouchableOpacity onPress={() => clickHandler(item.task_id)}>
        <Text style={styles.list}>{item.task_name}</Text>
      </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    }

});
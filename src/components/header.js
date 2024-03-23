import React, {useState} from  'react';
import {StyleSheet, View, Text } from 'react-native';

export default function header(){
    return(
        <View>
            <text style={StyleSheet.header}>My Todo List for Monday.</text>
        </View>
    )
}

const styles = Stylesheet.create({
    header:{
        fontSize: 30,
        fontWeight:'bold',
    }
})
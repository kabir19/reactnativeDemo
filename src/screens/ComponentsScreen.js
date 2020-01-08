import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {

    const name = 'Kashyap';

    return <View>
        <Text style={styles.textStyle}>Getting Started with react native!</Text>
        <Text style={styles.subtextStyle}>My name is {name}</Text>
    </View>

};


const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    },

    subtextStyle:{
        fontSize:20
    }
});

export default ComponentsScreen;
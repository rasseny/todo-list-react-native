import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        backgroundColor: '#CCCCFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#FFBF00',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 6,
    },

});

export default Task;

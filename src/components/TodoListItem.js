import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TodoListItem = ({ todo, onPressTodo }) => (
    <TouchableOpacity onPress={onPressTodo}>
        <View style={styles.line}>
            <Text style={styles.lineText}>
                { todo.text }
            </Text>
        </View>
    </TouchableOpacity>
)

export default TodoListItem

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineText: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 7

    },
})
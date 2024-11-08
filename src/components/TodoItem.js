import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const style = StyleSheet.create({
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    border: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  todoItemTeks: {
    flex: 1,
    marginRight: 8,
    color: '#333',
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#8888',
  },
  deleteButton: {
    backgroundColor: '#D04848',
    color: '#fff',
    padding: 4,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  completeButton: {
    backgroundColor: '#F3B95F',
    color: '#000',
    padding: 4,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
});

function TodoItem({task, deleteTask, toggleCompleted}) {
  return (
    <View style={style.todoItem}>
      <Text style={(style.todoItemTeks, task.completed && style.completed)}>
        {task.text}
      </Text>
      <TouchableOpacity
        style={style.deleteButton}
        onPress={() => deleteTask(task.id)}>
        <Text style={{color: '#fff'}}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.completeButton}
        onPress={() => toggleCompleted(task.id)}>
        <Text style={{color: '#fff'}}>
          {task.completed && 'completed'}
          {!task.completed && 'uncompleted'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoItem;

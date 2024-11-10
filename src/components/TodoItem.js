import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function TodoItem({task, deleteTask, toggleCompleted}) {
  return (
    <View style={styles.todoItem}>
      {/* Bagian Kiri: Nama, Harga, dan Total Item */}
      <View style={styles.leftSection}>
        <Text style={[styles.todoItemText, task.completed && styles.completed]}>
          {task.text}
        </Text>
        <Text style={[styles.todoItemText, task.completed && styles.completed]}>
          Harga: {task.textPrice}
        </Text>
        <Text style={[styles.todoItemText, task.completed && styles.completed]}>
          Total: {task.textTotal}
        </Text>
      </View>

      {/* Bagian Tengah: Harga x Total Item dan Total Harga */}
      <View style={styles.centerSection}>
        <Text style={[styles.todoItemText, task.completed && styles.completed]}>
          {task.textPrice} x {task.textTotal}
        </Text>
        <Text style={[styles.todoItemText, task.completed && styles.completed]}>
          Total Harga: {task.textPrice * task.textTotal}
        </Text>
      </View>

      {/* Bagian Kanan: Tombol */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(task.id)}>
          <Text style={{color: '#fff'}}>Hapus</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            task.completed ? styles.completeButton : styles.uncompleteButton
          }
          onPress={() => toggleCompleted(task.id)}>
          <Text style={{color: '#fff'}}>
            {task.completed ? 'Selesai' : 'Tertunda'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  todoItemText: {
    marginBottom: 4,
    color: '#333',
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#8888',
  },
  deleteButton: {
    backgroundColor: '#D04848',
    padding: 4,
    borderRadius: 4,
  },
  uncompleteButton: {
    backgroundColor: '#F3B95F',
    padding: 4,
    borderRadius: 4,
    marginTop: 4,
  },
  completeButton: {
    backgroundColor: 'green',
    padding: 4,
    borderRadius: 4,
    marginTop: 4,
  },
});

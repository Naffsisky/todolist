import React, {useState} from 'react';
import {
  FlatList,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TodoItem from '../components/TodoItem';
import uuid from 'react-native-uuid';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Buy milk',
      textTotal: '1',
      textPrice: '1000',
      completed: true,
    },
    {
      id: 2,
      text: 'Buy eggs',
      textTotal: '2',
      textPrice: '2000',
      completed: false,
    },
  ]);

  const options = {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(
    new Date(),
  );

  const [text, setText] = useState('');
  const [textTotal, setTextTotal] = useState('');
  const [textPrice, setTextPrice] = useState('');

  function addTask() {
    const newTask = {
      id: uuid.v4(),
      text,
      textTotal,
      textPrice,
      date: formattedDate,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText('');
    setTextTotal('');
    setTextPrice('');
    Keyboard.dismiss();
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar hidden />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              paddingVertical: 16,
            }}>
            To Do List
          </Text>
          <FlatList
            data={tasks}
            style={{paddingHorizontal: 16}}
            renderItem={({item}) => (
              <TodoItem
                key={item.id}
                task={item}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
              />
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={true}
          />
          <View style={styles.buttonContainer}>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="Nama Barang"
              placeholderTextColor="#000"
              style={styles.input}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                value={textTotal}
                onChangeText={setTextTotal}
                placeholder="Total"
                placeholderTextColor="#000"
                style={styles.inputAddOn}
                keyboardType="numeric"
              />
              <TextInput
                value={textPrice}
                onChangeText={setTextPrice}
                placeholder="Harga"
                placeholderTextColor="#000"
                style={styles.inputAddOn}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity onPress={addTask} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48CAE4',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 4,
  },
  inputAddOn: {
    height: 40,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    padding: 16,
    // paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  addButton: {
    backgroundColor: '#48CAE4',
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TodoList;

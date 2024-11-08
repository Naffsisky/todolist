import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Buy milk', completed: true},
    {id: 2, text: 'Buy eggs', completed: false},
  ]);

  const [text, setText] = useState('');

  function addTask() {
    const newTask = {id: Date.now(), text, completed: false};
    setTasks([...tasks, newTask]);
    setText('');
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
    <View>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <TextInput value={text} onChangeText={setText} placeholder="New Task" />
      <Button title="Add" onPress={addTask} />
    </View>
  );
};
export default TodoList;

import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { NavBar } from './src/NavBar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos,setTodos] = useState([]);
  const addTodo = (title) =>
  {
    setTodos(prev=>[...prev,{
      id:Date.now().toString(),
      title
    }])
  }
  const removeTodo = id => {
    setTodos(prev=>prev.filter(el=>el.id!==id))
  }
  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
        keyExtractor={item=>item.id}
        data={todos}
        renderItem={({item})=>(<Todo todo={item} onRemove={removeTodo}/>)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:30,
    paddingVertical:20
  }
});

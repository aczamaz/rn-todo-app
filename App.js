import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { NavBar } from './src/components/NavBar';
import { MainScreeen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId,setTodoId] = useState(null);
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
  let content = (
    <MainScreeen todos={todos} addTodo={addTodo} removeTodo={removeTodo}/>
  )
  if(todoId){
    content = <TodoScreen/>
  }
  return (
    <View>
      <NavBar title="Todo App"/>
      <View style={styles.container}>
        {content}
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

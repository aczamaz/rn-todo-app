import React from "react";
import {StyleSheet,View,FlatList} from 'react-native';
import { AddTodo } from "../components/AddTodo";
import {todo} from '../components/Todo';
export const MainScreeen = ({addTodo,todos,removeTodo}) => {
    return (
        <View>
           <AddTodo onSubmit={addTodo}/>
            <FlatList
            keyExtractor={item=>item.id}
            data={todos}
            renderItem={({item})=>(<Todo todo={item} onRemove={removeTodo}/>)}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({});
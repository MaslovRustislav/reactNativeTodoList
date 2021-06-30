import React, { useState,useCallback } from 'react';
import { StyleSheet, Text, View ,ScrollView,FlatList,TouchableOpacity,Dimensions,Button} from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'
import {Todo} from './src/Todo'
import {NavbarBlack} from './src/NavbarBlack'
import {AddTodoBlack} from './src/AddTodoBlack'
import { TodoBlack } from './src/TodoBlack';
import Apper from "./server/ServerExample"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
  export default function App() {
  const [todos,setTodos] =useState([
 

  ])


  const [isEnabled,setIsEnabled] = useState(false);
  const addTodo = title =>{

    setTodos(prev =>[...prev,{
      id:Date.now().toString(),
      completed: false,
      editFlag: false,
      title
    }])
    
  }
  const removeTodo = id=>{
    console.log(id)
    setTodos(prev => prev.filter(todo => todo.id!== id))
  }
  
  const doneTodo = useCallback( id=>{
    console.log(id)
    setTodos ((
      todos
        ) =>
        todos.map(
              item =>
              item.id === id 
              ? {...item,completed: !item.completed} 
              : item 
        )
      );
    },[]);
    const switchTheme = ()=>{
      console.log("it works")
      setIsEnabled(!isEnabled)
    }
    const editTodo =useCallback ((id,value)=>{
      console.log("inside editTodo")
      setTodos ((
        todos
          ) =>
          todos.map(
                item =>
                item.id === id 
                ? {...item,editFlag: !item.editFlag} 
                : item 

          )
      );
      
        setTodos ((
          todos
            ) =>
            todos.map(
              
                  item =>
                  item.id === id 
                  ? {...item,title: value} 
                  : item 
            )
        );
    },[]);
  return (
    <View>
       
      <Apper/>
      {isEnabled?  <Navbar title="To Do App" onSwitch={switchTheme} isEnabled={isEnabled} />:  <NavbarBlack title="To Do App" onSwitch={switchTheme} isEnabled={isEnabled} />}
     
    <View style={[isEnabled ? styles.container:styles.containerBlack]}>
     {isEnabled? <AddTodo onSubmit={addTodo}/>: <AddTodoBlack onSubmit={addTodo}/>}

      {isEnabled ? <FlatList
      keyExtractor={item=>item.id.toString()}
      data={todos}
      renderItem={({item})=><Todo todo={item} onRemove={removeTodo} onDone={doneTodo} onEdit={editTodo} onSubmit={editTodo} />}
      
      />
  :<FlatList
  keyExtractor={item=>item.id.toString()}
  data={todos}
  renderItem={({item})=><TodoBlack todo={item} onRemove={removeTodo} onDone={doneTodo} onEdit={editTodo}/>}
  
  />}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:windowHeight,
    width:windowWidth,
    paddingHorizontal:30,
    paddingVertical:20,
  },
  containerBlack:{
    height:windowHeight,
    width:windowWidth,
    backgroundColor:'black',
    paddingHorizontal:30,
    paddingVertical:20,
  }
});

import React,{useState} from 'react'
import {View,Text,StyleSheet, TouchableOpacity,Button,TextInput,Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export const TodoBlack =({todo,onRemove,onDone,onEdit,onSubmit})=>{
    const [value,setValue] = useState(todo.title)
    const pressHandler =()=>{
        if(value === ""&&todo.editFlag){
            console.log('it is in true')
            Alert.alert("Name of the task can't be empty")
        }
        else{
            
            onEdit(todo.id,value)
            
        }
        
    }
    return(
        <View style ={styles.todoRow}>
        <TouchableOpacity
        style={styles.todoTask}
        
        activeOpacity={0.5}
        onPress={()=>console.log('Pressed', todo.id)}
        onLongPress={onRemove.bind(null,todo.id)}
        >
        <View style={[todo.editFlag?styles.todoValid:styles.todo]}>
            {!todo.editFlag?
            <Text  
             style={todo.completed ?
             {textDecorationLine:'line-through',color:'white'}:
             {textDecorationLine:'none',color:'white'}}
            >{todo.title}</Text>:
            <TextInput 
                style={styles.input} 
                value={value}
                onChangeText={setValue}
                editable={true}
                placeholderTextColor="#969696"
                placeholder="Write task please"
                blurOnSubmit={true}
                />
            }
           
        </View>
        </TouchableOpacity>
        <View style={styles.interactionTasksBlock}>
            <TouchableOpacity
            style = {styles.doneButton}  
            onPress={onDone.bind(null,todo.id)}>
                    <Icon name="check-square" size={31} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
            style = {styles.editButton} 
            onPress={pressHandler}>
                <Icon name="edit" color="white" size={31} />
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    todoRow:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        borderBottomColor:"white",
        borderBottomWidth:1,
        paddingTop:5,
    },
    todoTask:{
        width:"85%",
        backgroundColor:'black',
    },
    checkMark:{
        color:"white",
    },
    todoDoneBtn:{
           width:"20%",   
           color:'blue',     
           fontSize:12,     
    },
    todo:{
        paddingHorizontal:15,
        paddingVertical:19,
        marginTop:4,
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:5,
        marginBottom:10,
    },
    todoValid:{
        padding:15,
        marginTop:4,
        borderWidth:1,
        borderColor:'green',
        borderRadius:5,
        marginBottom:10,
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            // height: 9,
        },
        // shadowOpacity: 0.5w0,
        // shadowRadius: 12.35,

        elevation: 3,
    },
    text:{
        color:'white',
        fontSize:20,
    },
   classes:{
       textDecorationLine:'line-through'
   },
   interactionTasksBlock:{
       width:"15%",
       justifyContent:'center',
   },
   input:{
       color:'white'
   },
   doneButton:{
       paddingLeft:15,
   },
   editButton:{
       paddingLeft:15,
       marginBottom:10,
   }
})
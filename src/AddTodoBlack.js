import React,{useState} from 'react'
import {View,StyleSheet,TextInput, Button,Alert,Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const AddTodoBlack = ({onSubmit})=>{
    const [value,setValue] = useState('')
    const pressHandler =()=>{
        if(value.trim()){
            onSubmit(value)
            setValue('')
        }
        else{
            Alert.alert("Name of the task can'te be empty")
        }
        
    }
    return(
        <View style={styles.block}>
                <TextInput 
                style={styles.input} 
                onChangeText ={setValue}
                value={value}
                placeholder="Write task please"
                placeholderTextColor="#969696"
                blurOnSubmit={true}
                />
               
                <TouchableOpacity style={styles.addButton}  onPress={pressHandler}><Text>ADD</Text></TouchableOpacity>
                
        </View>
    )
}
const styles = StyleSheet.create({
    block:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,
    },
    input:{
        width:'70%',
        padding:10,
        borderStyle:'solid',
        borderBottomWidth:2,
        borderBottomColor:'white',
        color:'white'
    },
    addButton:{
        width:45,
        height:35,
        backgroundColor:'white',
        color:'black',
        padding:8,
        borderRadius:2,
    }
})
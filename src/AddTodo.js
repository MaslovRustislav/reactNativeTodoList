import React,{useState,Component} from 'react'
import {View,StyleSheet,TextInput, Button,Alert,Text} from 'react-native'

export const AddTodo = ({onSubmit})=>{
   
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
                blurOnSubmit={true}
                />
               
                <Button  color ={"black"}title="Add" onPress={pressHandler} />
              
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
        borderBottomColor:'black'
    }
})
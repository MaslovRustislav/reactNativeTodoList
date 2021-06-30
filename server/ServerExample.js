import React, { Component } from 'react'
import { Text, StyleSheet, View ,Button} from 'react-native'

export default class ServerExample extends Component {
    constructor(props){
        super(props)

        this.state = {
            response: "click to connect to server"
        }
    }
    connect = () =>{
       console.log("it is in server")
        const URL = "https://localhost:8080/welcome";
        fetch(URL).then(response=>{ 
            if(response.status === 200){
                console.log('correct')
                return response.text()
            }
            else{
                console.log("error")
                throw new Error("something is wrong");
            }
        }).then(responseText =>{
            console.log("change state")
        this.setState({response:responseText})
        }).catch(error =>{
            console.log(" error change state")
            console.error(error.message);
        })
    }
    render() {
        return (
            <View>
            <Text>{this.state.response}</Text>
    <Button onPress={this.connect} title="connect"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

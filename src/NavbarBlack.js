import React ,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View,Text,StyleSheet,Modal,AntDesign,Button, Alert,Switch} from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
// import NavbarBlack from "./NavbarBlack"
const mess = "1"
export const NavbarBlack = (props,onSwitch,isEnabled)=>{
const [modalOpen,setModalOpen] = useState(false);

    return(
        <View style={styles.navbar}>
                     <Modal visible={modalOpen} anismationType={'slide'}>
                        <View style={styles.infoSection}>
                          <Icon style={styles.Cross} name="times" size={25} color="white" onPress={()=> setModalOpen(false)} />
                       <View style={styles.InfoContainer}>
                                <FlatList
                                    data={[
                                    {key: '1.Hold your tap on the task to delete it'},
                                    {key: '2.Tap on the checkmark for set task as done'},
                                    {key: '3.Tap on the editmark for change text in task'},
                                    ]}
                                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                                />
                     </View>
                        </View>
                    </Modal>
                    <View style={styles.flicker}>
                    <Switch
                     trackColor={{ false: "#767577", true: "#81b0ff" }}
                     thumbColor={props.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                     ios_backgroundColor="#3e3e3e"
                     onValueChange={props.onSwitch}
                     value={props.isEnabled}
      />
                    </View>
            <View style={styles.logo}>
                <Icon style={styles.todoIcon} name="th-list" size={30} color="white"/>
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <View style={styles.infoBlock}>
                <TouchableOpacity>
                      <Icon style={styles.explanation} name="exclamation-circle" size={25} color="white" onPress={()=> setModalOpen(true)} />
            </TouchableOpacity>
            </View>
    </View>
    )
}
const styles = StyleSheet.create({
    navbar:{
        backgroundColor:"black",
        height:110,
        flexDirection:"row",
        justifyContent:'center',  
        paddingBottom:10,
        borderBottomColor:'white',
        borderBottomWidth:2
    },
    logo:{
        paddingTop:15,
        flex:1,       
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center',
    },
    explanation:{
        top:0,
        
    },
    todoIcon:{
        paddingRight:10
    },
    text:{
        color:'white',
        fontSize:25,
    },
    flicker:{
      alignSelf:'flex-end' ,
      paddingLeft:5,
    },
    infoSection:{
        backgroundColor:'black',
    },
    infoBlock:{
        paddingRight:10,
        flexDirection:'row',
        alignItems:'flex-end'
    },
    InfoContainer:{
        alignItems:'center',
    },
    item:{
        color:'white',
        fontSize:18,
        lineHeight:40,
    },
    Cross:{
        alignSelf:'flex-end',
        padding:10
    },
})
import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const MyInput = props => {

    const [get, update] = useState('');

    const inputHandle = (text) => {
        update(text);
    }

    const addHandle = () => {

        props.onClick(get);
        update('');
    }
    

    return(

        <Modal visible={props.visible} animationType="slide">

            <View style={style.container}>

                <TextInput placeholder="Please input" style={style.input} onChangeText={inputHandle} value={get}/>

                <View style={style.buttonContainer}>

                    <Button style={style.button} title="Cancel" color="red" onPress={props.onCancel}/>
                    <Button style={style.button} title = "Press" onPress={addHandle} />

                </View>


            </View>

        </Modal>
    )
}

const style = StyleSheet.create({
    input: {
        width:'80%', 
        borderColor:'black', 
        borderBottomWidth:1, 
        padding:10,
        marginBottom:10
    },

    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    button:{
        width:10,
        padding:10,
        margin:10
    }
});

export default MyInput;
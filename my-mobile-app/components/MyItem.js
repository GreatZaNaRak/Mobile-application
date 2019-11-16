import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const MyItem = props => {
  

    return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>

        <View style={style.item}> 

          <Text>{props.val}</Text> 

        </View>

      </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    item: {
        padding: 10,
        margin:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth: 1
      }
});

export default MyItem;
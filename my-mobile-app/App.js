import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import MyItem from './components/MyItem';
import MyInput from './components/MyInput';

export default function App() {
  
  const [courselist, addlist] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const clickHandle = (i) => {
    
    addlist(currentGoals => [...courselist, {id: Math.random().toString(), val: i}]);
    setOpen(false);

  };

  const removeHandle = gId => {

    addlist(currentGoals => {
      return currentGoals.filter(i => i.id != gId);
    });

  };

  const cancelHandle = () => {

    setOpen(false);

  };

  return (

    <View style={styles.root}>

      <Button title="start" onPress={() => setOpen(true)} />
      <MyInput visible={isOpen} onClick={clickHandle} onCancel={cancelHandle}/>
      <FlatList 

        keyExtractor={(item, index) => item.id}
        data={courselist} 
        renderItem={i => <MyItem id={i.item.id} onDelete={removeHandle} val={i.item.val}/>}

      />
      

    </View>
  );
}

// stlye sheet

const styles = StyleSheet.create({

  root:{
    padding:50
  },  

});
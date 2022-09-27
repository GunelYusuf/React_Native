import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native'

export default function GoalItem (props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this,props.id)} android_ripple={{color:'orange'}} style={({pressed}) => pressed && styles.pressedItem}>
      <View style={styles.item}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: "pink",
    backgroundColor: "red",
    borderRadius: 8,
    padding:10,
    color: "#fff",
    fontSize: 18,
    height: 44,
    marginBottom: 7,
  },
  pressedItem:{
   opacity:0.5
    },
  text: {
    color: "#ffffff"
  },
});

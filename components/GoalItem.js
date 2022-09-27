import React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native'

export default function GoalItem (props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this,props.id)}>
      <View style={styles.item}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: "pink",
    backgroundColor: "pink",
    borderRadius: 8,
    color: "#fff",
    padding: 10,
    fontSize: 18,
    height: 44,
    marginBottom: 7,
  },
  text: {
    color: "#ffffff"
  },
});

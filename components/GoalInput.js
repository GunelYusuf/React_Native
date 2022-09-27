import React,{useState} from 'react';
import {TextInput,View,TouchableOpacity,Text,StyleSheet,Modal, Button} from 'react-native';


export default function GoalInput(props) {

   const [enteredGoalText, setGoalText] = useState("");

    function goalInputHandler(enteredText) {
      setGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setGoalText('')
    }
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.inputText}
          placeholder="Your Course Goals!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
    marginHorizontal:15
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    paddingVertical:13,
    borderRadius: 5,
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:16
  },
  button: {
    width:100,
    marginHorizontal:8,

  },
});

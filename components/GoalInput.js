import React,{useState} from 'react';
import {TextInput,View,TouchableOpacity,Text,StyleSheet} from 'react-native';


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
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.inputText}
        placeholder="Your Course Goals!"
        value={enteredGoalText}
      />
      <TouchableOpacity onPress={addGoalHandler}>
        <Text style={styles.button}>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    flex: 1,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 5,
  },
  button: {
    color: "skyblue",
  },
});

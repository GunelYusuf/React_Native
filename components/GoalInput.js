import React,{useState} from 'react';
import {TextInput,View,StyleSheet,Modal, Button,Image} from 'react-native';


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
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal1.png")}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.inputText}
          placeholder="Your Course Goals!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
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
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color:"#120438",
    width: "100%",
    padding: 16,
    paddingVertical: 13,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "#311b6b",
  },
});

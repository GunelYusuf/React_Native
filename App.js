import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";

export default function App() {
   const [enteredGoalText,setGoalText] = useState('');
   const [goals,setGoals] = useState([]);
   console.log(goals);

  function goalInputHandler(enteredText) {
    setGoalText(enteredText)
  }

  function addGoalHandler() {
    setGoals((currentCourseGoals) => [...currentCourseGoals, {text:enteredGoalText,id: Math.random().toString()}]);
  
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.inputText}
          placeholder="Your Course Goals!"
        />
        <TouchableOpacity onPress={addGoalHandler}>
          <Text style={styles.button}>Add Goal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.goalsContainer}>
        <View style={styles.container}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    borderColor: "pink",
    backgroundColor: "pink",
    borderRadius:8,
    color: "#fff",
    padding: 10,
    fontSize: 18,
    height: 44,
    marginBottom: 7,
  },
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
  },
  button: {
    color: "skyblue",
  },
  text:{
    color:"#ffffff"
  }
});

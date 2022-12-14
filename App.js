import React,{useState} from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  
   const [goals,setGoals] = useState([]);
   const [modalIsVisible,setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
      setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteItemHandler(id) {
      setGoals((currentCourseGoals) => 
      { return currentCourseGoals.filter((goal) => goal.id !== id)
      });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="red"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <View style={styles.container}>
            <FlatList
              data={goals}
              renderItem={(itemData) => (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteItemHandler}
                />
              )}
              keyExtractor={(item) => {
                return item.id;
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});

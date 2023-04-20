import { ScrollView, StyleSheet, View } from "react-native";
import InputSection from "./components/InputSection";
import ListSection from "./components/ListSection";
import { useState } from "react";

export default function App() {
  const [goalData, setGoalData] = useState([]);

  const addGoalHandler = (newGoal) => {
    setGoalData((prev) => [...prev, newGoal]);
  };

  const onDeleteHandler = (idToDelte) => {
    console.log("index to delete of array from app", idToDelte);
    setGoalData((prev) => prev.filter((ele) => ele !== prev[idToDelte]));
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <InputSection onAddGoal={addGoalHandler} />
      </View>
      <View style={styles.containerTwo}>
        <ScrollView>
          <ListSection data={goalData} onDeleteGoal={onDeleteHandler} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerOne: {
    flex: 2,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
  },
  containerTwo: {
    flex: 3,
    width: "100%",
    backgroundColor: "white",
  },
});

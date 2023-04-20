import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  StatusBar,
} from "react-native";
import InputSection from "./components/InputSection";
import ListSection from "./components/ListSection";
import { useState } from "react";

export default function App() {
  const [goalData, setGoalData] = useState([]);
  const [modalState, setModalState] = useState(false);

  const addGoalHandler = (newGoal) => {
    setGoalData((prev) => [...prev, newGoal]);
  };

  const onDeleteHandler = (idToDelte) => {
    setGoalData((prev) => prev.filter((ele) => ele !== prev[idToDelte]));
  };

  const openModalHandler = () => {
    setModalState(true);
  };

  const closeModalHandler = () => {
    setModalState(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerOne}>
        <StatusBar barStyle={"default"} />
        <InputSection
          onAddGoal={addGoalHandler}
          onShowModal={modalState}
          onCloseModal={closeModalHandler}
        />
        <Pressable onPress={openModalHandler}>
          {({ pressed }) => (
            <View
              style={[
                styles.btn,
                { backgroundColor: pressed ? "#e67300" : "#ff8c00" },
              ]}
            >
              <Text style={styles.textBtn}>Add goal</Text>
            </View>
          )}
        </Pressable>
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
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
  },
  containerTwo: {
    flex: 9,
    width: "100%",
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "##ff8c00",
    borderRadius: 4,
    padding: 10,
    alignSelf: "center",
    marginRight: 10,
    width: 100,
    display: "flex",
  },
  textBtn: { color: "white", textAlign: "center" },
});

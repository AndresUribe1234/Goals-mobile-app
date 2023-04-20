import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const InputSection = (props) => {
  const [inputGoal, setInputGoal] = useState("");

  const textChangeHandler = (event) => {
    setInputGoal(event);
  };

  const handleClick = (event) => {
    if (inputGoal.trim() !== "") {
      let goalToAdd = inputGoal.toLowerCase();
      goalToAdd = goalToAdd[0].toUpperCase() + goalToAdd.substring(1);
      props.onAddGoal(goalToAdd);
      props.onCloseModal();
    }
    setInputGoal("");
  };

  const closeHandler = () => {
    props.onCloseModal();
  };

  return (
    <Modal visible={props.onShowModal} animationType="slide">
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={require("./../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Enter your goal..."
          style={styles.input}
          value={inputGoal}
          onChangeText={textChangeHandler}
        />
        <View style={styles.btnContainer}>
          <Pressable onPress={handleClick}>
            {({ pressed }) => (
              <View
                style={[
                  styles.btn,
                  { backgroundColor: pressed ? "#e67300" : "#ff8c00" },
                ]}
              >
                <Text style={styles.textBtn}>Save goal!</Text>
              </View>
            )}
          </Pressable>
          <Pressable onPress={closeHandler}>
            {({ pressed }) => (
              <View
                style={[
                  styles.btn,
                  { backgroundColor: pressed ? "#e67300" : "#ff8c00" },
                ]}
              >
                <Text style={styles.textBtn}>Cancel</Text>
              </View>
            )}
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default InputSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#4B626D",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
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
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "white",
    textAlign: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginBottom: 20,
  },
});

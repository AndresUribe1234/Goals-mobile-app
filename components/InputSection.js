import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const InputSection = (props) => {
  const [inputGoal, setInputGoal] = useState("");

  const textChangeHandler = (event) => {
    setInputGoal(event);
  };

  const handleClick = (event) => {
    console.log("ref value", inputGoal);
    if (inputGoal.trim() !== "") {
      let goalToAdd = inputGoal.toLowerCase();
      goalToAdd = goalToAdd[0].toUpperCase() + goalToAdd.substring(1);
      props.onAddGoal(goalToAdd);
    }
    setInputGoal("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your goal..."
        style={styles.input}
        value={inputGoal}
        onChangeText={textChangeHandler}
      />
      <Pressable onPress={handleClick}>
        {({ pressed }) => (
          <View
            style={[
              styles.btn,
              { backgroundColor: pressed ? "#e67300" : "#ff8c00" },
            ]}
          >
            <Text style={styles.textBtn}>Click to save goal!</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default InputSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  btn: {
    backgroundColor: "##ff8c00",
    borderRadius: 4,
    padding: 10,
    alignSelf: "center",
  },
  textBtn: { color: "white" },
  input: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
});

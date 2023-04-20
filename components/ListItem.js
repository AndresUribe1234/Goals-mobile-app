import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ListItem = (props) => {
  const text = props.text;

  const deleteHandler = () => {
    props.onDeleteGoal(props.id);
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
      <Pressable onPress={deleteHandler}>
        {({ pressed }) => (
          <View
            style={[
              styles.btn,
              { backgroundColor: pressed ? "#4B626D" : "transparent" },
            ]}
          >
            <MaterialIcons name="delete" size={30} color="black" />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#708090",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  itemText: { color: "white" },
  pressedClass: { color: "white" },
});

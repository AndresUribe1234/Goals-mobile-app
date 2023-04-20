import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";

const ListSection = (props) => {
  const data = props.data;

  const onDeleteHandler = (idToDelte) => {
    props.onDeleteGoal(idToDelte);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.header}>GOALS</Text>
      </View>
      <View style={styles.listSection}>
        {data.map((ele, index) => (
          <ListItem
            text={ele}
            key={index}
            id={index}
            onDeleteGoal={onDeleteHandler}
          />
        ))}
      </View>
    </View>
  );
};

export default ListSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerSection: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1, // Apply border only to the bottom
    borderBottomColor: "#ccc", // Color of the border
  },
  header: { fontSize: 18, fontWeight: "bold" },
  listSection: {
    padding: 20,
    flex: 10,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

import React, { useState } from "react";
import { SectionHeading, Chart } from "./components";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { getDomainForChart } from "../utils/getChartDomain";
import { Exercises, Navigation } from "../Types";
// Dummy Data
import data from "../api/data.json";

const exercises = data.users[1].exercises;

interface ExercisesScreenTypes {
  exercises: Exercises;
  navigation: Navigation;
}

interface ExerciseListTypes {
  exercises: Exercises;
  navigation: Navigation;
}

interface ItemType {
  item: Element;
  backgroundColor?: String;
  textColor?: String;
  onPress: () => void;
  lastItem: Boolean;
}

const Item = ({ item, onPress, backgroundColor, textColor }: ItemType) => {
  const lastItem = exercises[exercises.length - 1].title;
  const firstItem = exercises[0].title;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        backgroundColor,
        lastItem === item.title && styles.lastItem,
        firstItem === item.title && styles.firstItem,
      ]}
    >
      <Text style={[styles.itemText, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const ExerciseList = ({ exercises, navigation }: ExerciseListTypes) => {
  const renderItem = ({ item }) => {
    const color = "#333";

    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate(`${item.title}`);
          // TODO: exercise/pushups
        }}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      data={exercises}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
  );
};

const ExercisesScreen = ({ navigation, exercises }: ExercisesScreenTypes) => {
  const { highest, lowest } = getDomainForChart(exercises);

  return (
    <View style={styles.container}>
      <SectionHeading>Exercises</SectionHeading>
      <Chart
        navigation={navigation}
        exercises={exercises}
        highest={highest}
        lowest={lowest}
      />
      <ExerciseList exercises={exercises} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderBottomWidth: 0, // conditional
    borderColor: "#D9D9D9",
  },
  itemText: {
    fontSize: 16,
  },
  firstItem: {
    borderTopRightRadius: 20, // conditional
    borderTopLeftRadius: 20, // conditional
  },
  lastItem: {
    borderBottomRightRadius: 20, // conditional
    borderBottomLeftRadius: 20, // conditional
    borderBottomWidth: 1, // conditional
  },
});

export default ExercisesScreen;

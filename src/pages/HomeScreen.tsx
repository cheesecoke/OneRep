import React from "react";
import { View, StyleSheet } from "react-native";
import { SectionHeading, CarouselSection, HomeChart } from "./components";
// Dummy Data
import data from "../api/data.json";
const exercises = data.users[1].exercises;
const getMonth = new Date().getMonth();
const month = data.month[getMonth];

interface Navigation {
  navigate: Function;
}

interface Exercises {
  map(arg0: (exercise: { total: Number }) => Number): unknown;
  slice(arg0: number, arg1: number): unknown;
  exercise: { title: string; total: number };
}

interface PropsType {
  exercises: Exercises;
  navigation: Navigation;
  month: String;
}

const HomeScreen = ({ navigation }: PropsType) => {
  return (
    <View style={styles.container}>
      <SectionHeading>Quick Add</SectionHeading>
      <CarouselSection exercises={exercises} />
      <SectionHeading>Top of {month}</SectionHeading>
      <HomeChart navigation={navigation} exercises={exercises} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;

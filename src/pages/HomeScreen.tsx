import React from "react";
import { View, StyleSheet } from "react-native";
import { SectionHeading, QuickAdd, Chart } from "./components";
import { getDomainForChart } from "../utils/getChartDomain";
import { Exercises, Navigation } from "../Types";
import data from "../api/data.json";
const getMonth = new Date().getMonth();
const month = data.month[getMonth];

interface PropTypes {
  exercises: Exercises;
  navigation: Navigation;
  month: String;
}

const HomeScreen = ({ navigation, exercises }: PropTypes) => {
  const topFour = exercises.slice(0, 4) as Exercises;
  const { highest, lowest } = getDomainForChart(exercises);

  return (
    <View style={styles.container}>
      <SectionHeading>Quick Add</SectionHeading>
      <QuickAdd exercises={exercises} />
      <SectionHeading>Top of {month}</SectionHeading>
      <Chart
        navigation={navigation}
        exercises={topFour}
        highest={highest}
        lowest={lowest}
        tab="Exercises"
        link="Exercises"
      />
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

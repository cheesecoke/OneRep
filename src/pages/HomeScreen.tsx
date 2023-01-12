import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SectionHeading, QuickAdd, Chart } from "./components";
import { getDomainForChart } from "../utils/getChartDomain";
import { ExercisesType, NavigationType } from "../Types";
import data from "../api/data.json";
const getMonth = new Date().getMonth();
const month = data.month[getMonth];

interface PropTypes {
  exercises: ExercisesType;
  navigation: NavigationType;
  month: String;
}

const HomeScreen = ({ navigation, exercises }: PropTypes) => {
  const topFour = exercises.slice(0, 4) as ExercisesType;
  const { highest, lowest } = getDomainForChart(exercises, "total");

  return (
    <ScrollView style={styles.container}>
      <SectionHeading>Quick Add</SectionHeading>
      <QuickAdd exercises={exercises} />
      <SectionHeading>Top of {month}</SectionHeading>
      <Chart
        navigation={navigation}
        data={topFour}
        highest={highest}
        lowest={lowest}
        tabText="Exercises"
        link="Exercises"
        xValue="title"
        yValue="total"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;

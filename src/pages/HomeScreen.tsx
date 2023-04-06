import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SectionHeading, QuickAdd, Chart } from "./components";
import { getDomainForChart } from "../utils/getChartDomain";
import { ExercisesType, NavigationType } from "../Types";

interface PropTypes {
  exercises: ExercisesType;
  navigation: NavigationType;
  month: String;
  userName: String;
}

const HomeScreen = ({ navigation, exercises, userName }: PropTypes) => {
  const topFour = exercises.slice(0, 4) as ExercisesType;
  const { highest, lowest } = getDomainForChart(exercises, "total");

  return (
    <ScrollView style={styles.container}>
      <SectionHeading>Welcome {userName}!</SectionHeading>
      <QuickAdd exercises={exercises} />
      <SectionHeading>Top Four Exercises</SectionHeading>
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

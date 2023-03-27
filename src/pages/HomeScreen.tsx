import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SectionHeading, QuickAdd, Chart } from "./components";
import { getDomainForChart } from "../utils/getChartDomain";
import { ExercisesType, NavigationType } from "../Types";
import { DataStore } from "aws-amplify";
import { Exercise } from "../models";

// remove
import data from "../api/data.json";
const getMonth = new Date().getMonth();
const month = data.month[getMonth];

interface PropTypes {
  exercises: ExercisesType;
  navigation: NavigationType;
  month: String;
}

const HomeScreen = ({ navigation, exercises }: PropTypes) => {
  // const [user, setUser] = useState([]);
  const topFour = exercises.slice(0, 4) as ExercisesType;
  const { highest, lowest } = getDomainForChart(exercises, "total");

  // useEffect(() => {
  //   //to be filled in a later step
  // }, []);

  // async function deleteTodo(user) {
  //   //to be filled in a later step
  // }

  // async function setComplete(updateValue, user) {
  //   //to be filled in a later step
  // }

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

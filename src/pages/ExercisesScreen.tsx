import React from "react";
import { SectionHeading, Chart, ExercisesItem } from "./components";
import { View, StyleSheet, VirtualizedList } from "react-native";
import { getDomainForChart } from "../utils/getChartDomain";
import { ExercisesType, NavigationType } from "../Types";

interface ExercisesScreenTypes {
  exercises: ExercisesType;
  navigation: NavigationType;
}

const ExercisesScreen = ({ navigation, exercises }: ExercisesScreenTypes) => {
  const { highest, lowest } = getDomainForChart(exercises, "total");
  const renderListItem = (item: ItemType) => {
    return (
      <ExercisesItem
        item={item}
        onPress={() =>
          navigation.navigate("Exercise", { exercise: exercises[item.index] })
        }
        itemIndex={item.index}
        exercises={exercises}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SectionHeading>Exercise Totals</SectionHeading>
      <VirtualizedList
        ListHeaderComponent={
          <Chart
            navigation={navigation}
            data={exercises}
            highest={highest}
            lowest={lowest}
            xValue="title"
            yValue="total"
          />
        }
        data={exercises}
        renderItem={(exercises) => renderListItem(exercises)}
        keyExtractor={(item: ItemType) => item}
        getItemCount={(exercises) => exercises.length}
        getItem={(exercises, index) => exercises[index].title}
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

export default ExercisesScreen;

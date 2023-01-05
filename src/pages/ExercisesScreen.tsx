import React from "react";
import { SectionHeading, Chart } from "./components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
const PRIMARY_COLOR = "#D1FAE5";
const SECONDARY_COLOR = "#BAE6FD";
const TERTIARY_COLOR = "#FED7AA";
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
  title: string;
  item: Element;
  backgroundColor?: String;
  textColor?: String;
  onPress: () => void;
  lastItem: String;
  itemIndex: number;
}

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  itemIndex,
}: ItemType) => {
  const lastItem = exercises[exercises.length - 1].title;
  const firstItem = exercises[0].title;

  console.log(itemIndex % 3);

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
      <View
        style={[
          styles.listNumber,
          itemIndex % 3 == 0 && styles.primary,
          itemIndex % 3 == 1 && styles.secondary,
          itemIndex % 3 == 2 && styles.tertiary,
        ]}
      >
        {itemIndex + 1}
      </View>
      <Text style={[styles.itemText, textColor]}>{item.title}</Text>
      <ArrowForwardIosIcon style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const ExerciseList = ({ exercises, navigation }: ExerciseListTypes) => {
  const renderItem = ({ item, index }) => {
    console.log(item, index + 1);
    const color = "#333";

    return (
      <Item
        item={item}
        onPress={() => {
          navigation.navigate(`${item.title}`);
          // TODO: exercise/pushups
        }}
        itemIndex={index}
        textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
      data={exercises}
      renderItem={(item: { item: ItemType; index: number }, index: number) =>
        renderItem(item, index)
      }
      keyExtractor={(item) => item.title}
    />
  );
};

const ExercisesScreen = ({ navigation, exercises }: ExercisesScreenTypes) => {
  const { highest, lowest } = getDomainForChart(exercises);

  return (
    <View style={styles.container}>
      <SectionHeading>This Month</SectionHeading>
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
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#D9D9D9",
  },
  itemText: {
    fontSize: 16,
    marginLeft: 20,
  },
  firstItem: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  lastItem: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomWidth: 1,
  },
  listNumber: {
    borderWidth: 2,
    borderColor: SECONDARY_COLOR, // Conditional
    borderRadius: 30,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowIcon: {
    display: "flex",
    color: "#c3c3c3",
    marginLeft: "auto",
  },
  primary: {
    borderColor: PRIMARY_COLOR,
  },
  secondary: {
    borderColor: SECONDARY_COLOR,
  },
  tertiary: {
    borderColor: TERTIARY_COLOR,
  },
});

export default ExercisesScreen;

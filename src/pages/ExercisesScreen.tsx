import React from "react";
import { SectionHeading, Chart } from "./components";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Icon from "@expo/vector-icons/MaterialIcons";
import {
  View,
  StyleSheet,
  VirtualizedList,
  TouchableOpacity,
  Text,
} from "react-native";
import { getDomainForChart } from "../utils/getChartDomain";
import { ExercisesType, NavigationType } from "../Types";
// Dummy Data
import data from "../api/data.json";
const exercises = data.users[1].exercises;
const PRIMARY_COLOR = "#D1FAE5";
const SECONDARY_COLOR = "#BAE6FD";
const TERTIARY_COLOR = "#FED7AA";

interface ItemComponentType {
  item: ItemType;
  onPress: () => void;
  itemIndex: number;
}

interface ItemType {
  // title?: string;
  index: number;
  item: { title: String };
  separators: {
    highlight: Function;
    unhighlight: Function;
    updateProps: Function;
  };
}

interface ExercisesScreenTypes {
  exercises: ExercisesType;
  navigation: NavigationType;
}

const Item = ({ item, onPress, itemIndex }: ItemComponentType) => {
  const lastItem = exercises[exercises.length - 1].title;
  const firstItem = exercises[0].title;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        lastItem === item.item && styles.lastItem,
        firstItem === item.item && styles.firstItem,
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
        <Text>{itemIndex + 1}</Text>
      </View>
      <Text style={styles.itemText}>{item.item}</Text>
      <Icon name="chevron-right" size={32} style={styles.icon} />
    </TouchableOpacity>
  );
};

const ExercisesScreen = ({ navigation, exercises }: ExercisesScreenTypes) => {
  const { highest, lowest } = getDomainForChart(exercises, "total");

  const renderListItem = (item: ItemType) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("Exercise", exercises[item.index])}
        itemIndex={item.index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SectionHeading>This Month</SectionHeading>
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
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
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

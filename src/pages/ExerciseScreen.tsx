import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  VirtualizedList,
  TouchableOpacity,
  Text,
} from "react-native";
import { getDomainForChart } from "../utils/getChartDomain";
import { Chart, SectionHeading } from "./components";
import { ExerciseType, NavigationType } from "../Types";
import { listEntriesByExerciseID } from "../api/functions";
// import { getEntries } from "../api/functions";

interface ItemType {
  index: number;
  item: { title: String };
  separators: {
    highlight: Function;
    unhighlight: Function;
    updateProps: Function;
  };
}

interface ItemComponentType {
  item: ItemType;
  onPress: () => void;
  itemIndex: number;
}

interface PropTypes {
  navigation: NavigationType;
  route: any;
}

const ExerciseScreen = ({ navigation, route }: PropTypes) => {
  const [entries, setEntries] = useState([]);

  // Get exercise based on param.
  const {
    params: { exercise },
  } = route;

  useEffect(() => {
    const fetchEntries = async () => {
      const result = await listEntriesByExerciseID(exercise.id);
      setEntries(result || []);
    };
    fetchEntries();
  }, [exercise.id]);

  console.log("Current id:", exercise.id);
  console.log({ entries });
  // const { highest, lowest } = getDomainForChart(exercise);
  // const { highest, lowest } = getDomainForChart(params.entries, "entered");

  // const Item = ({ item, onPress, itemIndex }: ItemComponentType) => {
  //   // const lastItem = exercises[exercises.length - 1].title;
  //   // const firstItem = exercises[0].title;
  //   console.log("Item:", item);
  //   // const getEntries = item.entries.map((entry) => (
  //   //   <View style={styles.itemContainer}>
  //   //     <View>{entry.entered}</View>
  //   //     <View>{entry.date}</View>
  //   //     <View>MENU</View>
  //   //   </View>
  //   // ));

  //   return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
  // };

  // const renderItem = (item: ItemType) => {
  //   return (
  //     <Item
  //       item={item}
  //       onPress={
  //         () => navigation.push("Exercise", item.item)
  //         // TODO: menu: update, delete
  //       }
  //       itemIndex={item.index}
  //     />
  //   );
  // };

  return (
    <View style={styles.container}>
      <SectionHeading>{exercise.title}</SectionHeading>
      {/* <Chart
        navigation={navigation}
        data={params.entries} // data
        highest={highest}
        lowest={lowest}
        xValue="date"
        yValue="entered"
        // horizontal
      /> */}
      {/* IF NULL HANDLE UI */}

      {entries.length > 0 ? (
        entries.map((entry) => {
          console.log();
          return (
            <>
              {/* <VirtualizedList
        data={exercise}
        renderItem={(exercise) => renderItem(exercise)}
        keyExtractor={(item: ItemType) => item.title}
        getItemCount={(exercise) => exercise.length}
        getItem={(exercise, index) => ({
          title: exercise[index].title,
          entries: exercise[index].entries,
        })}
      /> */}
              <Text>
                Entered: {entry.entered} Date: {entry.createdAt}
              </Text>
            </>
          );
        })
      ) : (
        <Text>No Entries</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
  },
});

export default ExerciseScreen;

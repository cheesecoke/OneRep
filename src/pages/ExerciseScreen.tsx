import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  VirtualizedList,
  TouchableOpacity,
  Text,
} from "react-native";
import { getDomainForChart } from "../utils/getChartDomain";
import {
  Chart,
  EntryListItem,
  SectionHeading,
  SlidingListItem,
} from "./components";
import { ExerciseType, NavigationType } from "../Types";
import { listEntriesByExerciseID } from "../api/functions";
import { formatDate } from "../utils/formatDate";

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
  const {
    params: { exercise },
  } = route;
  const { highest, lowest } = getDomainForChart(entries, "entered");
  const tickValues = entries.map((i) => i.day);

  useEffect(() => {
    const fetchEntries = async () => {
      const result = await listEntriesByExerciseID(exercise.id);
      const formattedData = result.map((entry) => {
        const dateObj = new Date(entry.createdAt);
        const day = dateObj.getDate();
        return { ...entry, date: `${formatDate(entry.createdAt)}`, day: day };
      });
      setEntries(formattedData || []);
    };
    fetchEntries();
  }, [exercise.id]);

  const renderItem = (itemObj) => {
    const { item } = itemObj;
    return (
      <SlidingListItem item={item} onDelete={() => console.log("delete")} />
    );
  };

  return (
    <View style={styles.container}>
      <SectionHeading>{exercise.title}</SectionHeading>
      {entries.length > 0 ? (
        <VirtualizedList
          ListHeaderComponent={
            <Chart
              navigation={navigation}
              data={entries}
              highest={highest < 0 ? 10 : highest}
              lowest={entries.length === 1 || lowest < 0 ? 0 : lowest}
              xValue="day"
              yValue="entered"
              tickValues={
                tickValues.length === 1 ? [1, ...tickValues] : tickValues
              }
            />
          }
          data={entries}
          renderItem={(entry) => renderItem(entry)}
          keyExtractor={(item: ItemType) => item.id}
          getItemCount={(entries) => entries.length}
          getItem={(entry, index) => ({
            index: index,
            id: entry[index].id,
            entered: entry[index].entered,
            date: formatDate(entry[index].createdAt),
          })}
        />
      ) : (
        <Text>Loading</Text>
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

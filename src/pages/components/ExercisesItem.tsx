import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

const PRIMARY_COLOR = "#D1FAE5";
const SECONDARY_COLOR = "#BAE6FD";
const TERTIARY_COLOR = "#FED7AA";

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

const ExercisesItem = ({
  item,
  onPress,
  itemIndex,
  exercises,
}: ItemComponentType) => {
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
      <Text style={styles.italic}> - {exercises[itemIndex].total}</Text>
      <Icon name="chevron-right" size={32} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  italic: { fontStyle: "italic" },
  itemText: {
    fontSize: 16,
    marginLeft: 20,
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: "#D9D9D9",
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

export default ExercisesItem;

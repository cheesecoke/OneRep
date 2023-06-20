import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import Icon from "@expo/vector-icons/FontAwesome5";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

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
  entries: Array;
}

const EntryListItem = ({
  item,
  onPress,
  itemIndex,
  entries,
}: ItemComponentType) => {
  const lastItem = entries[entries.length - 1].id;
  const firstItem = entries[0].id;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        lastItem === item.id && styles.lastItem,
        firstItem === item.id && styles.firstItem,
      ]}
    >
      <Text style={[styles.bold, styles.itemText]}>{item.entered}</Text>
      <Text style={[styles.italic, styles.itemText]}>{item.date}</Text>
      <Icon name="broom" size={25} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  italic: { fontStyle: "italic" },
  bold: { fontWeight: "bold" },
  itemText: {
    fontSize: 16,
    marginLeft: 20,
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

export default EntryListItem;

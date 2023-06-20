import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

const deleteButtonWidth = 85;

const SlidingListItem = ({ item, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const swipeOffset = useRef(new Animated.Value(-75)).current; // Initialize to swipeThreshold (-75)
  const swipeThreshold = -75;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    const toValue = isOpen ? 0 : swipeThreshold;
    Animated.timing(swipeOffset, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleDelete = () => {
    onDelete();
    toggleOpen();
  };

  const handleItemPress = () => {
    toggleOpen();
  };

  const translateX = swipeOffset.interpolate({
    inputRange: [swipeThreshold, 0],
    outputRange: [0, swipeThreshold],
    extrapolate: "clamp",
  });

  return (
    <>
      <Animated.View style={[styles.listItem, { transform: [{ translateX }] }]}>
        <TouchableOpacity
          style={styles.itemContent}
          onPress={handleItemPress}
          activeOpacity={isOpen ? 1 : 0.8}
        >
          <Text style={styles.itemText}>{item.entered}</Text>
          <Text style={styles.itemText}>{item.date}</Text>
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.itemActions}>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.actionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: "#C3C3C3",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 8,
    zIndex: 2,
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
  },
  itemText: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemActions: {
    position: "absolute",
    right: 20,
    top: 0,
    bottom: 0,
    width: deleteButtonWidth,
    flexDirection: "row",
  },
  deleteButton: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    borderRadius: 8,
    flex: 1,
  },
  actionButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default SlidingListItem;

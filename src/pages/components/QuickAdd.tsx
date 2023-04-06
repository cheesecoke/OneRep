import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Carousel } from ".";
import { ExercisesType } from "../../Types";
import { handleUpdateExercise } from "../../api/functions";

interface PropTypes {
  exercises?: ExercisesType;
}

const QuickAdd = ({ exercises = [] }: PropTypes) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [input, setInput] = useState("");

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const handleSubmit = (input) => {
    let newTotal;

    if (!(input > 0)) {
      Alert.alert(
        "Invalid Input",
        "Please enter a number greater than 0 for at least one exercise"
      );
      return;
    }

    if (input > 0 && exercises && exercises[activeIndex]) {
      newTotal = exercises[activeIndex].total + parseInt(input, 10);
      setInput("");
      handleUpdateExercise(newTotal, activeIndex, exercises);
    }
  };

  return (
    <>
      <Carousel
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        exercises={exercises}
      />
      <View style={styles.section}>
        <TextInput
          style={[styles.input]}
          keyboardType={"number-pad"}
          onChangeText={setInput}
          placeholder="Enter number of reps."
          value={input}
        />

        {exercises && exercises[activeIndex] ? (
          <Text style={[styles.subText, styles.total]}>
            Total {exercises[activeIndex].title}: {exercises[activeIndex].total}
          </Text>
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit(input)}
          accessibilityLabel="Submit your number of reps"
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  carousel: {
    flexDirection: "row",
  },
  section: {
    margin: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    fontWeight: "bold",
    backgroundColor: "#BAE6FD",
    borderRadius: 10,
  },
  submit: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#737373",
  },
  subText: {
    marginBottom: 15,
    fontSize: 12,
  },
  total: {
    fontStyle: "italic",
    color: "#737373",
  },
});

export default QuickAdd;

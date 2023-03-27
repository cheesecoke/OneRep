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
// Dummy Data
import data from "../../api/data.json";
const getMonth = new Date().getMonth();
const month = data.month[getMonth];

interface Exercises {
  map(arg0: (exercise: { total: Number }) => Number): unknown;
  slice(arg0: number, arg1: number): unknown;
  exercise: { title: string; total: keyof typeof Number };
}

interface PropType {
  exercises: Exercises;
  month: String;
}

const QuickAdd = ({ exercises }: PropType) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [error, setError] = useState(false);
  const { title, total } = exercises[activeIndex];
  const [input, setInput] = useState("");
  const [history, setHistory] = useState("");
  const [newTotal, setNewTotal] = useState(total);

  const handleSubmit = (input) => {
    let newInput, newTotal;
    const currentDate = new Date();

    // Check if input field has a valid value
    if (!(input > 0)) {
      Alert.alert(
        "Invalid Input",
        "Please enter a number greater than 0 for at least one exercise"
      );
      return;
    }

    // "entries": [
    //   { "entered": 66, "date": "11/08/2022" },
    //   { "entered": 10, "date": "11/08/2022" },
    //   { "entered": 5, "date": "11/08/2022" }
    // ]

    // Push entry
    // Add to total, push
    console.log(typeof input);
    if (input > 0) {
      newInput = { entered: input, date: currentDate };
      newTotal = total + parseInt(input, 10);
      setInput("");
    }

    setHistory(newInput);
    //push to db
    setNewTotal(newTotal);
    //push to db
  };

  console.log({ history });
  console.log({ newTotal });

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

        <Text style={[styles.subText, styles.total]}>
          Total {title} for {month}: {total}
        </Text>

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

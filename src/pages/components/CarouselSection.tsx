import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
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

const CarouselSection = ({ exercises }: PropType) => {
  const [activeExercise, setActive] = useState(0);
  const [reps, setReps] = useState(0);
  const [error, setError] = useState(false);
  const { title, total } = exercises[activeExercise];

  const handleSubmit = (reps: number) => {
    if (!error && reps > 0) {
      // API calls.
      console.log("Submitted", reps);
    }
  };

  const handleChange = (e: Event) => {
    const reg = new RegExp("^\\d+$");
    const value = (e.target as HTMLInputElement).value;

    //Errors
    // world record of push ups.
    if (reg.test(value) && value.charAt(0) !== "0") {
      setReps(+value);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Carousel
        activeExercise={activeExercise}
        setActive={setActive}
        exercises={exercises}
      />
      <View style={styles.section}>
        <TextInput
          style={[
            styles.input,
            error ? styles.inputError : styles.inputFocused,
          ]}
          keyboardType={"number-pad"}
          onChange={(e) => handleChange(e)}
          onSubmitEditing={() => handleSubmit(reps)}
          placeholder="Enter number of reps."
        />

        {error ? (
          <Text style={[styles.subText, styles.errorText]}>
            Please, enter a <i>number</i> greater than 0.
          </Text>
        ) : (
          <Text style={[styles.subText, styles.total]}>
            Total {title} for {month}: {total}
          </Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit(reps)}
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
    fontWeight: 700,
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
  inputError: {
    borderColor: "red",
    outlineColor: "red",
  },
  inputFocused: {
    borderColor: "#737373",
    outlineColor: "#737373",
  },
  errorText: {
    color: "red",
  },
});

export default CarouselSection;

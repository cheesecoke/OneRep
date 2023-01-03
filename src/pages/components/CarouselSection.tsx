import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Carousel } from ".";

type Props = {
  exercises: [];
};

const CarouselSection = ({ exercises }: Props) => {
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
        {error && (
          <Text style={styles.errorText}>
            Please, enter a <i>number</i> greater than 0.
          </Text>
        )}
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

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSubmit(reps)}
          accessibilityLabel="Submit your number of reps"
        >
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.total}>
          Total {title}: {total}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
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
    marginBottom: 10,
  },
  submit: {
    fontSize: 16,
    fontWeight: 700,
    color: "#737373",
  },
  total: {
    fontSize: 12,
    fontStyle: "italic",
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
    marginBottom: 5,
  },
});

export default CarouselSection;

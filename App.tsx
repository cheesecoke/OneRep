import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Carousel, SectionHeading } from "./src/components";

const App = () => {
  const exercises = ["Pushups", "Situps", "Pullups", "Squats", "Burpees"];
  const [activeExercise, setActive] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <SectionHeading>Quick Add</SectionHeading>
      <Carousel
        activeExercise={activeExercise}
        setActive={setActive}
        exercises={exercises}
      ></Carousel>
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          placeholder="Enter the number of reps."
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Submit: TODO")}
          accessibilityLabel="Submit your number of reps"
        >
          <Text>Submit</Text>
        </TouchableOpacity>
        <Text>Total {exercises[activeExercise]}: </Text>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    border: "1px solid green",
  },
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
});

export default App;

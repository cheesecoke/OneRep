import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { SectionHeading, CarouselSection } from "./src/components";
const globalStyle = require("./src/styles/global");

const data = [
  {
    username: "admin",
    userId: 12314,
    exercises: [
      { title: "Pushups", total: 0 },
      { title: "Situps", total: 0 },
      { title: "Pullups", total: 0 },
      { title: "Squats", total: 0 },
      { title: "Burpees", total: 0 },
    ],
  },
];

const App = () => {
  const exercises = data[0].exercises;

  return (
    <SafeAreaView style={[globalStyle.globalStyles, styles.container]}>
      <SectionHeading>Quick Add</SectionHeading>
      <CarouselSection exercises={exercises} />
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
});

export default App;

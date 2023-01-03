import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { HomeScreen, AllExercisesScreen, LoginScreen } from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const globalStyle = require("./src/styles/global");
const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OneRep">
          <Stack.Screen name="OneRep">
            {(props) => <HomeScreen {...props} exercises={exercises} />}
          </Stack.Screen>
          <Stack.Screen name="All Exercises">
            {(props) => <AllExercisesScreen {...props} exercises={exercises} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
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

//TODO:
// User db
// Login
// Privacy Policy
// Logo
// User page
// Settings

export default App;

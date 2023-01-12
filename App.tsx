import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, LogBox } from "react-native";
import {
  HomeScreen,
  ExercisesScreen,
  ExerciseScreen,
  LoginScreen,
} from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import globalStyle from "./src/styles/global";
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(["Require cycle: node_modules/victory"]);

import data from "./src/api/data.json";
const exercises = data.users[1].exercises;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} exercises={exercises} />}
          </Stack.Screen>
          <Stack.Screen name="Exercises">
            {(props) => <ExercisesScreen {...props} exercises={exercises} />}
          </Stack.Screen>
          <Stack.Screen name="Exercise">
            {(props) => <ExerciseScreen {...props} />}
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

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  LogBox,
  Button,
  View,
  Text,
} from "react-native";
import {
  HomeScreen,
  ExercisesScreen,
  ExerciseScreen,
  LoginScreen,
} from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(["Require cycle: node_modules/victory"]);

//AWS Amplify
import awsconfig from "./src/aws-exports";
import { Amplify, Auth } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
Amplify.configure(awsconfig);

// Remove - import globalStyle from "./src/styles/global";
import data from "./src/api/data.json";
const exercises = data.users[1].exercises;

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

const App = () => {
  return (
    <Authenticator.Provider>
      <Authenticator initialState="signUp">
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                options={{ headerRight: () => <SignOutButton /> }}
              >
                {(props) => <HomeScreen {...props} exercises={exercises} />}
              </Stack.Screen>
              <Stack.Screen name="Exercises">
                {(props) => (
                  <ExercisesScreen {...props} exercises={exercises} />
                )}
              </Stack.Screen>
              <Stack.Screen name="Exercise">
                {(props) => <ExerciseScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaView>
      </Authenticator>
    </Authenticator.Provider>
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

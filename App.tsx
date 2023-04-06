import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, LogBox, Button } from "react-native";
import { HomeScreen, ExercisesScreen, ExerciseScreen } from "./src/pages";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
LogBox.ignoreLogs(["Require cycle: node_modules/victory"]);

//AWS Amplify
import awsconfig from "./src/aws-exports";
import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";
Amplify.configure(awsconfig);
import { defaultData } from "./src/api/defaultData";
import {
  getUserName,
  fetchItems,
  subscribeToUpdateExercise,
} from "./src/api/functions";

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

const App = () => {
  const [userName, setUserName] = useState("");
  const [exercises, setExercises] = useState(defaultData);

  useEffect(() => {
    getUserName(setUserName);
    fetchItems(setExercises);
    const subscription = subscribeToUpdateExercise(setExercises);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                options={{ headerRight: () => <SignOutButton /> }}
              >
                {(props) => (
                  <HomeScreen
                    {...props}
                    userName={userName}
                    exercises={exercises}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="Exercises">
                {(props) => (
                  <ExercisesScreen {...props} exercises={exercises} />
                )}
              </Stack.Screen>
              {/* <Stack.Screen name="Exercise">
                {(props) => <ExerciseScreen {...props} />}
              </Stack.Screen> */}
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

export default App;

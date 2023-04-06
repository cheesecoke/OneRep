import { API, Auth, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { onUpdateExercise } from "../graphql/subscriptions";
import {
  CreateEntryMutation,
  CreateEntryInput,
  OnUpdateExerciseSubscription,
} from "../API";
import { GraphQLSubscription, GraphQLQuery } from "@aws-amplify/api";

export const getUserName = async (setUserName: Function) => {
  try {
    const name = await Auth.currentAuthenticatedUser();
    setUserName(name.username);
  } catch (error) {
    console.log(error);
  }
};

// Get initial data
export const fetchItems = async (setExercises: Function) => {
  try {
    const response = await API.graphql(graphqlOperation(queries.listExercises));
    const data = response.data?.listExercises.items;
    setExercises(data);
  } catch (error) {
    console.log(error);
  }
};

// Subscription to listen for mutations.
export const subscribeToUpdateExercise = (setExercises: Function) => {
  return API.graphql<GraphQLSubscription<OnUpdateExerciseSubscription>>(
    graphqlOperation(onUpdateExercise)
  ).subscribe({
    next: (data) => {
      if (
        data &&
        data.value &&
        data.value.data &&
        data.value.data.onUpdateExercise
      ) {
        const updatedExerciseData = data.value.data.onUpdateExercise;
        setExercises((prevExercises) => {
          const updatedIndex = prevExercises.findIndex(
            (exercise) => exercise.id === updatedExerciseData.id
          );

          if (updatedIndex !== -1) {
            const updatedExercises = [...prevExercises];
            updatedExercises[updatedIndex] = {
              ...prevExercises[updatedIndex],
              ...updatedExerciseData,
            };

            return updatedExercises;
          } else {
            return prevExercises;
          }
        });
      }
    },
    error: (error) => console.log(error),
  });
};

export const handleUpdateExercise = async (
  newTotal: number,
  index: number,
  exercises,
  userInput: string
) => {
  const newExercise = {
    id: exercises[index].id,
    title: exercises[index].title,
    total: newTotal,
    _version: exercises[index]._version,
  };

  const entryDetails: CreateEntryInput = {
    entered: parseInt(userInput),
    exerciseID: exercises[index].id,
  };

  try {
    await API.graphql<GraphQLQuery<CreateEntryMutation>>(
      graphqlOperation(mutations.createEntry, { input: entryDetails })
    );

    await API.graphql(
      graphqlOperation(mutations.updateExercise, {
        input: newExercise,
      })
    );
    // TODO: Alert Milestones, 100, 200: Badges
  } catch (error) {
    console.error("Error updating exercise:", error);
    return;
  }
};

// Filter entries based on exerciseID
export const listEntriesByExerciseID = async (
  exerciseID: string,
  limit?: number
) => {
  try {
    const result = await API.graphql(
      graphqlOperation(
        `
      query ListEntriesByExerciseID($exerciseID: ID!) {
        listEntries(
          filter: { exerciseID: { eq: $exerciseID } },
        ) {
          items {
            id
            exerciseID
            entered
            createdAt
          }
        }
      }
    `,
        { exerciseID, limit }
      )
    );
    return result.data.listEntries.items;
  } catch (error) {
    console.error("Error fetching entries by exercise ID", error);
    return null;
  }
};

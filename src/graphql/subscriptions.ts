/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateEntry = /* GraphQL */ `subscription OnCreateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onCreateEntry(filter: $filter) {
    id
    entered
    date
    exerciseID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEntrySubscriptionVariables,
  APITypes.OnCreateEntrySubscription
>;
export const onUpdateEntry = /* GraphQL */ `subscription OnUpdateEntry($filter: ModelSubscriptionEntryFilterInput) {
  onUpdateEntry(filter: $filter) {
    id
    entered
    date
    exerciseID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEntrySubscriptionVariables,
  APITypes.OnUpdateEntrySubscription
>;
export const onDeleteEntry = /* GraphQL */ `subscription OnDeleteEntry($filter: ModelSubscriptionEntryFilterInput) {
  onDeleteEntry(filter: $filter) {
    id
    entered
    date
    exerciseID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEntrySubscriptionVariables,
  APITypes.OnDeleteEntrySubscription
>;
export const onCreateExercise = /* GraphQL */ `subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onCreateExercise(filter: $filter) {
    id
    title
    total
    Entries {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExerciseSubscriptionVariables,
  APITypes.OnCreateExerciseSubscription
>;
export const onUpdateExercise = /* GraphQL */ `subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onUpdateExercise(filter: $filter) {
    id
    title
    total
    Entries {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExerciseSubscriptionVariables,
  APITypes.OnUpdateExerciseSubscription
>;
export const onDeleteExercise = /* GraphQL */ `subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
  onDeleteExercise(filter: $filter) {
    id
    title
    total
    Entries {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExerciseSubscriptionVariables,
  APITypes.OnDeleteExerciseSubscription
>;

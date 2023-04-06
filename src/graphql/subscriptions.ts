/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEntry = /* GraphQL */ `
  subscription OnCreateEntry($filter: ModelSubscriptionEntryFilterInput) {
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
    }
  }
`;
export const onUpdateEntry = /* GraphQL */ `
  subscription OnUpdateEntry($filter: ModelSubscriptionEntryFilterInput) {
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
    }
  }
`;
export const onDeleteEntry = /* GraphQL */ `
  subscription OnDeleteEntry($filter: ModelSubscriptionEntryFilterInput) {
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
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
      id
      title
      total
      Entries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
      id
      title
      total
      Entries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
      id
      title
      total
      Entries {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

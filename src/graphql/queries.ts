/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEntry = /* GraphQL */ `
  query GetEntry($id: ID!) {
    getEntry(id: $id) {
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
export const listEntries = /* GraphQL */ `
  query ListEntries(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncEntries = /* GraphQL */ `
  query SyncEntries(
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEntries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const entriesByExerciseID = /* GraphQL */ `
  query EntriesByExerciseID(
    $exerciseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    entriesByExerciseID(
      exerciseID: $exerciseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        total
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExercises = /* GraphQL */ `
  query SyncExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        total
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

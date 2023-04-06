import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerEntry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly entered?: number | null;
  readonly date?: string | null;
  readonly exerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEntry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly entered?: number | null;
  readonly date?: string | null;
  readonly exerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Entry = LazyLoading extends LazyLoadingDisabled ? EagerEntry : LazyEntry

export declare const Entry: (new (init: ModelInit<Entry>) => Entry) & {
  copyOf(source: Entry, mutator: (draft: MutableModel<Entry>) => MutableModel<Entry> | void): Entry;
}

type EagerExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly total?: number | null;
  readonly Entries?: (Entry | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly total?: number | null;
  readonly Entries: AsyncCollection<Entry>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exercise = LazyLoading extends LazyLoadingDisabled ? EagerExercise : LazyExercise

export declare const Exercise: (new (init: ModelInit<Exercise>) => Exercise) & {
  copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}
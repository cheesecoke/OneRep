export interface ExerciseType {
  [x: string]: any;
  id: string;
  title: string;
  total: number;
  entries: { entered: number };
}
export interface ExercisesType {
  length: number;
  map(arg0: (exercise: { total: Number }) => Number): unknown;
  slice(arg0: number, arg1: number): unknown;
  exercise: ExerciseType;
}

export interface NavigationType {
  push(arg0: string, item: { title: String }): void;
  navigate: Function;
}

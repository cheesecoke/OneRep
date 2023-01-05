import React from "react";
import { SectionHeading } from "./components";

type PropsType = {
  exercises: Object[];
};

const ExercisesScreen = ({ exercises }: PropsType) => {
  return (
    <>
      <SectionHeading>Exercises</SectionHeading>
    </>
  );
};

export default ExercisesScreen;

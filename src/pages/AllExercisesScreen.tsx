import React from "react";
import { SectionHeading, CarouselSection } from "./components";

type PropsType = {
  exercises: Object[];
};

const AllExercisesScreen = ({ exercises }: PropsType) => {
  return (
    <>
      <SectionHeading>All Exercises</SectionHeading>
    </>
  );
};

export default AllExercisesScreen;

import React from "react";
import { Text, Button } from "react-native";
import { SectionHeading, CarouselSection } from "./components";

type PropsType = {
  exercises: Object[];
  navigation: Object[];
};

const HomeScreen = ({ exercises, navigation }: PropsType) => {
  console.log(typeof navigation);
  return (
    <>
      <SectionHeading>Quick Add</SectionHeading>
      <CarouselSection exercises={exercises} />
    </>
  );
};

export default HomeScreen;

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";

interface Exercises {
  map(arg0: (exercise: { total: Number }) => Number): unknown;
  slice(arg0: number, arg1: number): unknown;
  exercise: { title: string; total: number };
}

interface Navigation {
  navigate: Function;
}

interface PropTypes {
  exercises: Exercises;
  tab?: String;
  link?: String;
  navigation?: Navigation;
  highest?: Number;
  lowest?: Number;
}

const Chart = ({
  navigation,
  exercises,
  lowest,
  highest,
  tab,
  link,
}: PropTypes) => {
  console.log(lowest);
  return (
    <TouchableOpacity
      style={styles.chart}
      onPress={() => {
        navigation.navigate(`${link}`);
      }}
    >
      <VictoryChart
        height={300}
        animate={{
          duration: 1000,
          onLoad: { duration: 500 },
        }}
        theme={VictoryTheme.material}
        domainPadding={30}
        domain={{
          y: [lowest, highest == 0 ? 10 : highest],
        }}
      >
        <VictoryAxis
          standalone={false}
          dependentAxis
          crossAxis
          style={{ grid: { stroke: "#BAE6FD" } }}
        />
        <VictoryAxis
          standalone={false}
          crossAxis
          offsetY={49}
          style={{ grid: { stroke: "#BAE6FD" } }}
        />
        <VictoryBar
          style={{ data: { fill: "#FED7AA", width: 32 } }}
          data={exercises}
          x="title"
          y="total"
        />
      </VictoryChart>
      {tab && (
        <View style={styles.tabContainer}>
          <View style={[styles.top, styles.tabBorder]}>
            <View style={[styles.topCurve, styles.tabBorderCurve]} />
          </View>
          <View style={styles.tabMiddle}>
            <Text>Exercises</Text>
          </View>
          <View style={[styles.bottom, styles.tabBorder]}>
            <View style={[styles.bottomCurve, styles.tabBorderCurve]} />
          </View>
          <View />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chart: {
    display: "flex",
    border: "1px solid #fbfbfb",
    backgroundColor: "#fbfbfb",
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    boxShadow: "inset 0px 1px 3px 0px #00000040",
  },
  tabContainer: {
    position: "absolute",
    height: "100%",
    width: 40,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  tabMiddle: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    transform: [{ rotate: "-0.25turn" }],
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 1,
    borderColor: "#EFEFEF",
  },
  tabBorder: {
    height: 30,
    width: 30,
    backgroundColor: "#fff",
  },
  tabBorderCurve: {
    height: 30,
    width: 30,
    right: 0,
    backgroundColor: "#fbfbfb",
  },
  top: {
    bottom: 40,
    left: 5,
  },
  topCurve: {
    borderBottomRightRadius: 23,
    borderRightWidth: 1,
    borderRightColor: "#EFEFEF",
  },
  bottom: {
    top: 40,
    left: 5,
  },
  bottomCurve: {
    borderTopRightRadius: 23,
    borderRightWidth: 1,
    borderRightColor: "#EFEFEF",
  },
});

export default Chart;
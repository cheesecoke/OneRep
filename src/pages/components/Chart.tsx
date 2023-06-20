import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import { ExerciseType, NavigationType, ExercisesType } from "../../Types";

interface PropTypes {
  data: ExercisesType | ExerciseType;
  link?: String;
  navigation?: NavigationType;
  highest?: Number;
  lowest?: Number;
  tabText?: String;
  horizontal?: boolean;
  xValue: string | number;
  yValue: string | number;
  tickValues?: Array | Object;
}

const Chart = ({
  navigation,
  data,
  lowest,
  highest,
  link,
  tabText,
  horizontal,
  xValue,
  yValue,
  tickValues,
}: PropTypes) => {
  return (
    <TouchableOpacity
      style={styles.chart}
      onPress={() => {
        navigation.navigate(`${link}`);
      }}
    >
      {/* <View style={styles.insetShadowTopAndLeft} />
      <View style={styles.insetShadowBottomAndRight} /> */}
      <VictoryChart
        height={300}
        animate={{
          duration: 1000,
          onLoad: { duration: 500 },
        }}
        theme={VictoryTheme.material}
        domainPadding={{ x: [20, 30] }}
        domain={{
          y: [lowest, highest == 0 ? 10 : highest],
        }}
        chartConfig={{ decimalPlaces: 0 }}
        horizontal={horizontal}
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
          tickValues={tickValues}
        />
        <VictoryBar
          style={{ data: { fill: "#FED7AA", width: 20 } }}
          data={data}
          x={xValue}
          y={yValue}
        />
      </VictoryChart>
      {tabText && (
        <View style={styles.tabContainer}>
          {/* <View style={[styles.top, styles.tabBorder]}>
            <View style={[styles.topCurve, styles.tabBorderCurve]} />
          </View> */}
          <View style={styles.tabMiddle}>
            <Text>{tabText}</Text>
          </View>
          {/* <View style={[styles.bottom, styles.tabBorder]}>
            <View style={[styles.bottomCurve, styles.tabBorderCurve]} />
          </View> */}
          <View />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // TODO: ios
  // insetShadowTopAndLeft: {
  //   position: "absolute",
  //   borderColor: "#C3C3C3",
  //   // width: "100%",
  //   // height: "100%",
  //   borderWidth: 1,
  //   borderRadius: 25,
  //   bottom: 0,
  //   top: 0,
  //   right: 0,
  //   left: 0,
  //   // boxShadow: "inset 0px 1px 3px 0px #00000040",
  //   shadowColor: "#00000040",
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowOpacity: 1,
  // },
  insetShadowBottomAndRight: {},
  chart: {
    display: "flex",
    zIndex: 1,
    borderColor: "#C3C3C3",
    borderWidth: 1,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 25,
  },
  // TODO: tab curve
  tabContainer: {
    position: "absolute",
    height: "100%",
    width: 40,
    right: -1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabMiddle: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    transform: [{ rotate: "-90deg" }],
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#C3C3C3",
  },
  // tabBorder: {
  //   height: 30,
  //   width: 30,
  //   backgroundColor: "pink", //#fff",
  // },
  // tabBorderCurve: {
  //   height: 30,
  //   width: 30,
  //   right: 0,
  //   backgroundColor: "green", //#fbfbfb",
  // },
  // top: {
  //   bottom: 40,
  //   left: 5,
  // },
  // topCurve: {
  //   borderBottomRightRadius: 23,
  //   borderRightWidth: 1,
  //   borderRightColor: "#EFEFEF",
  // },
  // bottom: {
  //   top: 40,
  //   left: 5,
  // },
  // bottomCurve: {
  //   borderTopRightRadius: 23,
  //   borderRightWidth: 1,
  //   borderRightColor: "#EFEFEF",
  // },
});

export default Chart;

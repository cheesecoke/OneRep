import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

const CARD_WIDTH_HEIGHT = 120;
const PRIMARY_COLOR = "#D1FAE5";
const SECONDARY_COLOR = "#BAE6FD";
const TERTIARY_COLOR = "#FED7AA";

type Props = {
  exercises: string[];
  activeExercise: number;
  setActive: Function;
};

const Carousel = ({ exercises, activeExercise, setActive }: Props) => {
  const [flatListRef, setFlatlistRef] = useState<Object | null>("");

  return (
    <View style={styles.container}>
      <FlatList
        ref={(flatListRef) => {
          setFlatlistRef(flatListRef);
        }}
        horizontal
        data={exercises}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  if (flatListRef !== null) {
                    flatListRef.scrollToIndex({
                      animated: true,
                      index: index,
                      viewPosition: 0.5,
                    });
                  } else {
                    index = 0;
                  }

                  setActive(index);
                }}
              >
                <Text
                  style={[
                    styles.card,
                    activeExercise == index && styles.active,
                    index === 0 && styles.firstItem,
                    (index === 0 || index === 3) && styles.primary,
                    (index === 1 || index === 4) && styles.secondary,
                    index === 2 && styles.third,
                  ]}
                >
                  {/* {item} Image - monkey? */}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.title,
                  activeExercise == index && styles.activeTitle,
                ]}
              >
                {item}
              </Text>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 161,
  },
  card: {
    width: CARD_WIDTH_HEIGHT,
    height: CARD_WIDTH_HEIGHT,
    borderRadius: 25,
    marginTop: 10,
    transition: "all .2s ease-in-out",
    boxShadow: "0px 2px 4px 0px #00000040",
  },
  active: {
    transform: "scale(1.05)",
  },
  firstItem: {
    marginLeft: 20,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 25,
  },
  title: {
    marginTop: 10,
  },
  activeTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
  primary: {
    backgroundColor: PRIMARY_COLOR,
  },
  secondary: {
    backgroundColor: SECONDARY_COLOR,
  },
  third: {
    backgroundColor: TERTIARY_COLOR,
  },
});

export default Carousel;

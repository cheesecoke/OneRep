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

type ExercisesType = {
  title: string;
  total: number;
};

type Props = {
  exercises: ExercisesType[];
  activeIndex: number;
  setActiveIndex: Function;
};

const Carousel = ({ exercises, activeIndex, setActiveIndex }: Props) => {
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

                  setActiveIndex(index);
                }}
              >
                <Text
                  style={[
                    styles.card,
                    activeIndex == index && styles.active,
                    index === 0 && styles.firstItem,
                    index % 3 == 0 && styles.primary,
                    index % 3 == 1 && styles.secondary,
                    index % 3 == 2 && styles.third,
                  ]}
                >
                  {/* {item} Image - monkey? */}
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  styles.title,
                  activeIndex == index && styles.activeTitle,
                ]}
              >
                {item.title}
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
    overflow: "hidden",
    marginTop: 10,
    transition: "all .2s ease-in-out",
    boxShadow: "0px 2px 4px 0px #00000040",
  },
  active: {
    transform: [{ scale: 1.1 }],
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

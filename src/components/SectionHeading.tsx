import { View, Text, StyleSheet } from "react-native";

type Props = {
  children: string;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default SectionHeading;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 19,
    textAlign: "left",
    color: "#737373",
  },
});

import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/colors";

export default function InstructionsText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans",
  },
});

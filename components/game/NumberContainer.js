import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    minWidth: 140,
    borderWidth: 4,
    borderColor: Colors.accent500,
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 16,
    marginVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

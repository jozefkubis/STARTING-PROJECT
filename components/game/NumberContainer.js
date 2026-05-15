import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  numberContainer: {
    minWidth: 140,
    borderWidth: 4,
    borderColor: Colors.accent500,
    paddingVertical: 18,
    paddingHorizontal: deviceWidth < 380 ? 12 : 24,
    borderRadius: 16,
    marginVertical: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});

import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
    width: 300,
    fontSize: 24,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 20,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ android: 2, ios: 0 }),
    padding: 12,
    borderRadius: 14,
    alignSelf: "center",
  },
});

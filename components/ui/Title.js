import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    width: "100%",
    maxWidth: 360,
    fontSize: 28,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
    borderRadius: 14,
    alignSelf: "center",
  },
});

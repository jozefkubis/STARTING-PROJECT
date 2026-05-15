import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constans/colors";

export default function Card({ children, style }) {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    width: "100%",
    maxWidth: 420,
    padding: 24,
    backgroundColor: Colors.primary900,
    borderRadius: 18,
    elevation: 4, // Android shadow
    shadowColor: Colors.black, // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowRadius: 6, // iOS shadow
    shadowOpacity: 0.25, // iOS shadow
    alignItems: "center",
  },
});

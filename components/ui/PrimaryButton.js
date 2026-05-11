import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutterConstainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerConstainer, styles.pressed]
            : styles.buttonInnerConstainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary400 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutterConstainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // to ensure the ripple effect is contained within the button
    width: "100%",
  },
  buttonInnerConstainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4, // Android shadow
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

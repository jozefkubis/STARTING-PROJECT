import { Pressable, StyleSheet, Text, View } from "react-native"

export default function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed")
  }

  return (
    <View style={styles.buttonOutterConstainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerConstainer, styles.pressed]
            : styles.buttonInnerConstainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#5e0230" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOutterConstainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", // to ensure the ripple effect is contained within the button
    width: "100%",
  },
  buttonInnerConstainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4, // Android shadow
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
})

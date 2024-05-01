import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 8,
    borderColor: Colors.secondary400,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    fontSize: 50,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
    color: Colors.secondary400,
  },
});

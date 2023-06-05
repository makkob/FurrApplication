import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import styled from "styled-components/native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wow</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "teal",
    fontSize: 48,
  },
});

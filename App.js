import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, TextInput } from "react-native";
// import styled from "styled-components/native";

import Search from "./components/Search";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
  },
  text: {
    flex: 1,

    color: "teal",
    fontSize: 48,
  },
});

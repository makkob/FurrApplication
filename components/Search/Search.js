import * as React from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  RadioButton,
  IconButton,
  TextInput,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Search = () => {
  const [visibleModal, setVisibleModal] = React.useState(null);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  const showModal = (modalName) => {
    setVisibleModal(modalName);
  };

  const hideModal = () => {
    setVisibleModal(null);
  };

  const handlePurposeSelection = (purpose) => {
    console.log("Selected purpose:", purpose);
  };

  const handleAnimalSelection = (animal) => {
    console.log("Selected animal:", animal);
  };

  const handleLocationSelection = (location) => {
    console.log("Selected location:", location);
  };

  const handleDateSelection = (date) => {
    console.log("Selected date:", date);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal
            visible={visibleModal === "purpose"}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Purpose</Text>
            <RadioButton.Group onValueChange={handlePurposeSelection}>
              <View style={styles.radioContainer}>
                <RadioButton.Item label="Planned Visit" value="Planned" />
              </View>
            </RadioButton.Group>
          </Modal>
        </Portal>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => showModal("purpose")}>
            Select Purpose
          </Button>
          <IconButton
            icon={() => <Icon name="chevron-down" size={20} />}
            onPress={() => showModal("purpose")}
            style={styles.iconButton}
          />
        </View>
        <Portal>
          <Modal
            visible={visibleModal === "animal"}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Text>Animals</Text>
            <RadioButton.Group onValueChange={handleAnimalSelection}>
              <View style={styles.radioContainer}>
                <RadioButton.Item label="Cats" value="cats" />
                <RadioButton.Item label="Dogs" value="dogs" />
                <RadioButton.Item label="Other" value="other" />
              </View>
            </RadioButton.Group>
          </Modal>
        </Portal>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => showModal("animal")}>
            Select Animal
          </Button>
          <IconButton
            icon={() => <Icon name="chevron-down" size={20} />}
            onPress={() => showModal("animal")}
            style={styles.iconButton}
          />
        </View>
        <TextInput
          label="Location"
          value=""
          onChangeText={handleLocationSelection}
          style={styles.input}
        />
        <TextInput
          label="Date"
          value=""
          onChangeText={handleDateSelection}
          style={styles.input}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 40,
  },
  button: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  radioContainer: {
    marginTop: 20,
  },
  iconButton: {
    marginLeft: 10,
  },
  input: {
    marginTop: 10,
    width: "100%",
  },
});

export default Search;

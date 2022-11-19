import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";

const Dashboard = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Bull Dozer</Text>
      <TextInput onChangeText={onChangeText} placeholder={"Model"} />
      <Text>{text}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput placeholder="number" keyboardType="numeric" />
      <Button
        title={"Go To Manage Categoreis"}
        onPress={() => navigation.navigate("ManageCategories")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Dashboard;

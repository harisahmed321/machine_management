import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ManageCategories = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text>Manage Catagories</Text>
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

export default ManageCategories;

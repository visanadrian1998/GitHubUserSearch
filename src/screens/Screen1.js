import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "react-native-input-style";

const Screen1 = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    setText(e.nativeEvent.text);
    setError(null);
  };

  const onSubmit = () => {
    //console.log("text", text);
    setError(null);
    fetch(`https://api.github.com/users/${text}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError("User not found");
        } else {
          navigation.navigate("Screen2", { array: data });
          setError(null);
        }
        //console.log("data", data);
      })
      .then();
  };

  return (
    <View styles={styles.container}>
      <Input
        id="Username"
        label="Username"
        keyboardType="default"
        required
        onInputChange={() => {}}
        onChange={onChange}
        initialValue=""
        borderColor="#009688"
        value={text}
        inputStyle={{ color: "#009688" }}
      />
      <TouchableOpacity
        style={text === "" ? styles.disabledButton : styles.appButtonContainer}
        activeOpacity={0.8}
        onPress={onSubmit}
        disabled={text === ""}
      >
        <Text style={styles.appButtonText}>
          Find most successful repository
        </Text>
      </TouchableOpacity>
      {error ? <Text style={styles.errorText}>{error}</Text> : <Text></Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 35,
    height: 40,
    width: 100,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  disabledButton: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginBottom: 10,
    opacity: 0.5,
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  errorText: {
    color: "#009688",
    paddingLeft: 10,
  },
});

export default Screen1;

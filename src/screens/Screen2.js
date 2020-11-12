import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const Screen2 = ({route}) => {
  const { array } = route.params;
  return (
    <View>
    <Text>{JSON.stringify(array)}</Text>
    </View>
  );
};

export default Screen2;
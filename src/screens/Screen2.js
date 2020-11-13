import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";

const Screen2 = ({ route }) => {
  const { array } = route.params;
  array.sort(function (a, b) {
    return parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count);
  });
  array.length > 10 ? (array.length = 10) : "";
  return (
    <SafeAreaView>
      {array.length == 0 ? (
        <Text style={styles.noReposText}>
          Unfortunately, this user has 0 repositories.
        </Text>
      ) : (
        <>
          <View style={styles.listHeader}>
            <Text style={styles.listName}>Name</Text>
            <Text style={styles.listName}>Number of stars</Text>
          </View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 45 }}
            data={array}
            keyExtractor={(item) => item.node_id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.listItem}>
                <Text style={styles.listName}>{item.name}</Text>
                <Text style={styles.listName}>{item.stargazers_count}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#009688",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 15,
  },
  listHeader: {
    backgroundColor: "#009688",
    flexDirection: "row",
    padding: 10,
  },
  listName: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "flex-start",
  },
  listStars: {
    flex: 0.5,
    textAlign: "center",
    alignItems: "flex-end",
  },
  noReposText: {
    color: "#009688",
    paddingLeft: 10,
  },
});

export default Screen2;

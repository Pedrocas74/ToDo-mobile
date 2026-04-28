import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Filter } from "../hooks/useTasks";

type Props = {
    setFilter: (filter: Filter) => void;
  };

export default function TaskFilters({ setFilter }: Props) {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFilter("all")} style={styles.touchable}>
        <Text style={styles.text}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter("pending")} style={styles.touchable}>
        <Text style={styles.text}>Pending</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFilter("done")} style={styles.touchable}>
        <Text style={styles.text}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    width: "50%",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  touchable: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 5,
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});

import { View, Text, Pressable, StyleSheet } from "react-native";
//types
import { Task } from "../hooks/useTasks";

type Props = {
    task: Task;
}

export default function TaskItem({ task }: Props) {
  return (
    <View style={styles.task}>
      <Text>{task.text}</Text>
      <Pressable style={styles.deleteBtn}>
        <Text>-</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
    task: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderWidth: 1,
        borderColor: "green"
    },

    text: {

    },

    deleteBtn: {
        width: 40,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "red"
    }
})
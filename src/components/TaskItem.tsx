import { View, Text, Pressable, StyleSheet } from "react-native";
//types
import { Task } from "../hooks/useTasks";

type Props = {
  task: Task;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

export default function TaskItem({ task, removeTask, toggleTask }: Props) {

  return (
    <View style={styles.task}>
      <Text>{task.text}</Text>
      <View style={styles.taskRight}>
        <Pressable style={styles.deleteBtn} onPress={() => removeTask(task.id)}>
          <Text>-</Text>
        </Pressable>
        <Pressable onPress={() => toggleTask(task.id)}>
          <Text>{task.done ? "DONE" : "NOT"}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderColor: "green",
    padding: 5
  },

  taskRight: {
    flexDirection: "row-reverse"
  },

  text: {},

  deleteBtn: {
    width: 40,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
  },

  marker: {
    flex: 1,
  },
});

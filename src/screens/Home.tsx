import { Text, View, StyleSheet, FlatList } from "react-native";
//custom components
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
//custom hooks
import { useTasks } from "../hooks/useTasks";

export default function Home() {
  const { tasks, addTask, removeTask, toggleTask } = useTasks();

  return (
    <View style={styles.page}>
      <Text style={styles.title}>ToDo</Text>
      <TaskInput addTask={addTask} />

      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              removeTask={removeTask}
              toggleTask={toggleTask}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
  },

  title: {
    fontSize: 42,
    fontWeight: 700,
  },

  tasksContainer: {
    borderWidth: 1,
    borderColor: "orange",
  },
});

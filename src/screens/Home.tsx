import { Text, View, StyleSheet, FlatList } from "react-native";
//custom components
import TaskInput from "../components/TaskInput";
import TaskItem from "../components/TaskItem";
import TaskFilters from "../components/TaskFilters";
//custom hooks
import { useTasks } from "../hooks/useTasks";


export default function Home() {
  const { filteredTasks, addTask, removeTask, toggleTask, setFilter } = useTasks();

  return (
    <View style={styles.page}>
      <Text style={styles.title}>ToDo</Text>

      <View style={styles.inputContainer}>
        <TaskInput addTask={addTask} />
      </View>
      
      <TaskFilters setFilter={setFilter} />

      <View>
        <FlatList
        style={styles.list}
          data={filteredTasks}
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
    padding: 10,
    alignItems: "center"
  },

  title: {
    fontSize: 42,
    fontWeight: 700,
    marginTop: 25
  },

  inputContainer: {
    marginTop: 50,
    width: 400
  },

  list: {
    width: 400
  },

  tasksContainer: {
    borderWidth: 1,
    borderColor: "orange",
  },
});

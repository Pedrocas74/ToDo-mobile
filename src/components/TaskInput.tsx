import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
//custom functions
import { useTasks } from "../hooks/useTasks";

export default function TaskInput() {
  const [input, setInput] = useState<string>("");
  const { addTask } = useTasks();

  return (
    <View>
      <Text>What do you need ToDo?</Text>

      <View>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
          placeholder="Write a task here"
        ></TextInput>

        <Pressable onPress={() => addTask(input)}>
          <Text>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
  },
});

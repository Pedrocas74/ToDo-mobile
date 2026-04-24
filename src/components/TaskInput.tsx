import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

type Props = {
  addTask: (text: string) => void;
};

export default function TaskInput({ addTask }: Props) {
  const [input, setInput] = useState<string>("");

  return (
    <View>
      <Text>What do you need ToDo?</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
          placeholder="Write a task here"
        ></TextInput>

        <Pressable style={styles.addButton} onPress={(e) => {
          e.preventDefault();
          addTask(input);
          setInput("");
        }}>
          <Text>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
   borderWidth: 1,
   borderColor: "blue",
   flexDirection: "row"
  },

  input: {
    flex: 3,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
  },

  addButton: {
    flex: 1,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

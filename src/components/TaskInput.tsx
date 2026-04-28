import React from "react";
import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { isNonEmpty, sanitize } from "../utils/helpers";

type Props = {
  addTask: (text: string) => void;
};

export default function TaskInput({ addTask }: Props) {
  const [input, setInput] = useState<string>("");

  return (
    <View>
      {/* <Text style={styles.text}>What do you need ToDo?</Text> */}

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={styles.input}
          placeholder="Write a task here"
        ></TextInput>

        <Pressable
          style={styles.addButton}
          onPress={(e) => {
            e.preventDefault();
            if (!isNonEmpty(input)) return;
            addTask(sanitize(input));
            setInput("");
          }}
        >
          <Text>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 100,
  },

  text: {
    marginBottom: 12,
    alignSelf: "center",
  },

  input: {
    flex: 3,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    paddingLeft: 15,
    marginRight: 5,
  },

  addButton: {
    flex: 1,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});

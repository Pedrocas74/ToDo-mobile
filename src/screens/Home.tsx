import React from "react";
import { Text, View, StyleSheet } from "react-native";
//custom components
import TaskInput from "../components/TaskInput";


export default function Home() {

    return (
        <View style={styles.page}>  
            <Text style={styles.title}>ToDo</Text>
            <TaskInput />
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        borderWidth: 1,
        borderColor: "red",
    }, 

    title: {
        fontSize: 42,
        fontWeight: 700
    }
})
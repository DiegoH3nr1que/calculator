import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PageNotePad() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Recuperar dados do AsyncStorage ao montar o componente
    getDataFromStorage();
  }, []);

  const saveNote = async () => {
    if (note.trim() !== "") {
      const updatedNotes = [...notes, note];
      setNotes(updatedNotes);
      setNote(""); // Limpa o campo de entrada após salvar a nota

      // Salvar os dados no AsyncStorage
      try {
        await AsyncStorage.setItem(
          "@MyStorage:notes",
          JSON.stringify(updatedNotes)
        );
        console.log("Nota salva com sucesso!");
      } catch (error) {
        console.error("Erro ao salvar nota:", error);
      }
    }
  };

  const deleteNote = async (index) => {
    // Excluir a nota do estado
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);

    // Salvar os dados atualizados no AsyncStorage
    try {
      await AsyncStorage.setItem(
        "@MyStorage:notes",
        JSON.stringify(updatedNotes)
      );
      console.log("Nota excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir nota:", error);
    }
  };

  const confirmDeleteNote = (index) => {
    Alert.alert(
      "Excluir Nota",
      "Deseja realmente excluir esta nota?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: () => deleteNote(index) },
      ],
      { cancelable: true }
    );
  };

  const getDataFromStorage = async () => {
    try {
      // Recuperar dados do AsyncStorage
      const storedNotes = await AsyncStorage.getItem("@MyStorage:notes");
      if (storedNotes !== null) {
        const parsedNotes = JSON.parse(storedNotes);
        setNotes(parsedNotes);
        console.log("Notas recuperadas com sucesso:", parsedNotes);
      } else {
        console.log("Nenhuma nota armazenada.");
      }
    } catch (error) {
      console.error("Erro ao recuperar notas:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {notes.map((item, index) => (
          <View key={index} style={styles.noteContainer}>
            <Text style={styles.noteItem}>{item}</Text>
            <TouchableOpacity onPress={() => confirmDeleteNote(index)}>
              <Text style={styles.deleteButton}>Excluir</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua nota..."
          value={note}
          onChangeText={(text) => setNote(text)}
        />
        <TouchableOpacity style={styles.button} onPress={saveNote}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  noteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  noteItem: {
    flex: 1,
  },
  deleteButton: {
    color: "red",
    marginLeft: 10,
  },
});

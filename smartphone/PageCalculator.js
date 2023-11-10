// screens/PageCalculator.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function PageCalculator() {
  const [expression, setExpression] = useState('');

  const handlePress = async (value) => {
    if (value === '=') {
      try {
        const result = await eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
        console.log(error)
      }
    } else if (value === 'C') {
      setExpression('');
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={expression}
        editable={false}
        placeholder="Insira a sua conta"
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button3} onPress={() => handlePress('C')}>
          <Text>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => handlePress('-')}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={() => handlePress('%')}>
          <Text>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => handlePress('/')}>
          <Text>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => handlePress('*')}>
          <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => handlePress('-')}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => handlePress('+')}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => handlePress('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(',')}>
          <Text>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4} onPress={() => handlePress('=')}>
        <Text>=</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: '90%',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'right',
    paddingRight: 10,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row', // Ajusta o layout para linha
    flexWrap: 'wrap', // Permite que os itens "quebrem" para a próxima linha
    justifyContent: 'space-between',
  },
  button: {
    width: 90, // 30% da largura do pai (3 itens por linha)
    height: 90,
    margin: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  button2: {
    width: 190, // 30% da largura do pai (3 itens por linha)
    height: 90,
    margin: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  button3: {
    width: 90, // 30% da largura do pai (3 itens por linha)
    height: 90,
    margin: 5,
    backgroundColor: '#555555',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  button4: {
    width: 90, // 30% da largura do pai (3 itens por linha)
    height: 90,
    margin: 5,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
});


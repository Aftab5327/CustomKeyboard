import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const CustomKeyboard = () => {
  const [text, setText] = React.useState('');

  const handleTextChange = (input: string) => {
    setText(input.toUpperCase());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Text:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
        placeholder="Type here..."
        placeholderTextColor="#888"  // Lighter color for placeholder text
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5', // Light background color
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',  // Darker text color for the label
  },
  input: {
    height: 50,
    borderColor: '#ccc',  // Light border color
    borderWidth: 1,
    borderRadius: 10,  // Rounded corners
    paddingHorizontal: 16,
    backgroundColor: '#fff',  // White background for the input field
    shadowColor: '#000',  // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,  // Shadow on Android
  },
});

export default CustomKeyboard;

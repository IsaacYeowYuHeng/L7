import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { foodItems } from './Data';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Food:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter food"
                placeholderTextColor="#757575"
            />
            <Text style={styles.label}>Amount of Calories:</Text>
            <TextInput
                style={styles.input}
                value={calories}
                onChangeText={setCalories}
                placeholder="Enter amount of calories"
                placeholderTextColor="#757575"
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="ADD"
                    onPress={() => {
                        foodItems[0].data.push({
                            food: name.trim(),
                            calorie: calories,
                        });

                        navigation.navigate('Home');
                    }}
                    color="#4CAF50"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#F1F8E9',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#FF9800',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#FFF3E0',
        color: '#000',
    },
    buttonContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
});

export default Add;

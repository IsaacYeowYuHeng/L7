import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { foodItems } from './Data';

const Edit = ({ navigation, route }) => {
    const { index, food, calorie } = route.params;
    const [name, SetName] = useState(food);
    const [calories, setCalories] = useState(calorie.toString());

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Food:</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={SetName}
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

            <View style={styles.buttonRow}>
                <View style={styles.buttonContainer}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            foodItems[0].data[index].food = name.trim();
                            foodItems[0].data[index].calorie = calories;
                            navigation.navigate('Home');
                        }}
                        color="#4CAF50"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            Alert.alert('Confirm Delete', 'Are you sure you want to delete this item?', [
                                { text: 'Cancel', style: 'cancel' },
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        foodItems[0].data.splice(index, 1);
                                        navigation.navigate('Home');
                                    },
                                },
                            ]);
                        }}
                        color="#FF5722"
                    />
                </View>
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
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
});

export default Edit;

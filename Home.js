import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SectionList, Button, Alert } from 'react-native';
import { foodItems } from './Data';

const Home = ({ navigation }) => {
    const calculateCalories = () => {
        const totalCalories = foodItems[0].data.reduce((sum, item) => sum + Number(item.calorie), 0);
        let message = `Total Calories: ${totalCalories}\n`;

        if (totalCalories > 3000) {
            message += 'Beyond Recommended Daily Intake for men.\n';
        } else {
            message += 'Within Recommended Daily Intake of 2000 for men.\n';
        }

        if (totalCalories > 1600) {
            message += 'Beyond Recommended Daily Intake for women.';
        } else {
            message += 'Within Recommended Daily Intake of 1600 for women.';
        }

        Alert.alert('Total Calorie Consumption', message);
    };
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() =>
                navigation.navigate('Edit', {
                    index,
                    food: item.food,
                    calorie: item.calorie,
                })
            }
        >
            <Text style={styles.textStyle}>{item.food}</Text>
            <Text style={styles.caloriesStyle}>Calories: {item.calorie}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title="Add Food"
                    onPress={() => navigation.navigate('Add')}
                    color="#4CAF50"
                />
            </View>

            <StatusBar hidden={true} />
            <SectionList
                sections={[{ title: 'Food Items', data: foodItems[0].data }]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.headerText}>{title}</Text>
                )}
            />

            <View style={styles.calculateButtonContainer}>
                <Button
                    title="Calculate Calories"
                    onPress={calculateCalories}
                    color="#FF5722"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginBottom: 50,
        marginTop: 40,
        backgroundColor: '#F1F8E9',
    },
    buttonContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#4CAF50',
        marginBottom: 10,
        padding: 5,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'left',
        color: '#4CAF50',
        marginBottom: 5,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#FF9800',
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#FFF3E0',
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 16,
        color: '#000',
    },
    caloriesStyle: {
        fontSize: 14,
        color: '#757575',
    },
    calculateButtonContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#FF5722',
        padding: 5,
        borderRadius: 5,
    },
});

export default Home;

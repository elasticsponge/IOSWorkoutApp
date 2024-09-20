import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Workout App</Text>
            <Button title="Start Workout" onPress={() => { /* Navigate to workout screen */ }} />
            {/* Add more components for workout suggestions and progress overview */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default HomeScreen;

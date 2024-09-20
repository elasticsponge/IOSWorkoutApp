import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

export const fetchExercises = async () => {
    try {
        const response = await axios.get(`${API_URL}/exercises`);
        return response.data;
    } catch (error) {
        console.error('Error fetching exercises:', error);
        throw error;
    }
};

import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../app/screens/HomeScreen';

test('renders welcome text', () => {
    const { getByText } = render(<HomeScreen />);
    const welcomeText = getByText(/Welcome to Workout App/i);
    expect(welcomeText).toBeTruthy();
});

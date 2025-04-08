import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FakPage from './page/FakPage';

test('check if the page renders', async () => {
    render(<FakPage />);
    const carouselElement = await screen.findByTestId('container');
    expect(carouselElement).toBeInTheDocument();
});

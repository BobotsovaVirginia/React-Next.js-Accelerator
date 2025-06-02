import React from 'react';
import { render, screen } from '@testing-library/react';
import PrimaryButton from './Button';

describe('PrimaryButton', () => {
    it('renders with correct label', () => {
        render(<PrimaryButton label="Test" onClick={() => {}} />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import SampleCard from './SampleCard';

describe('SampleCard', () => {
  it('renders title and description', () => {
    render(<SampleCard title="Test Title" description="Test Desc" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Desc')).toBeInTheDocument();
  });
});

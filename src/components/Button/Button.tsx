import React from 'react';
import Button from '@mui/material/Button';

interface Props {
    label: string;
    onClick: () => void;
}

const PrimaryButton: React.FC<Props> = ({ label, onClick }) => (
    <Button variant="contained" color="primary" onClick={onClick}>
        {label}
    </Button>
);

export default PrimaryButton;

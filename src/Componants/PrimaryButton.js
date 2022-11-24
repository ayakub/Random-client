import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button
            className="btn btn-primary text-white w-full">{children}
        </button>
    );
};

export default PrimaryButton;
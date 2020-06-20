import React from "react";
import './LoadingIcon.css';

const LoadingIcon = () => {
    return (
        <div className="loading-icon">
            <svg viewBox="0 0 50 50">
                <circle className="loading-icon-circle" cx="25" cy="25" r="20" fill="none" stroke="#60ac5d" strokeWidth="2"/>
            </svg>
        </div>
    );
};

export default LoadingIcon;
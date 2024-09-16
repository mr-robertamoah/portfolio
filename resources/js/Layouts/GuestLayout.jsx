import React from 'react';

export default function Guest({ className = '', children }) {
    return (
        <div className={className + " min-h-screen bg-gray-100"}>

            <main>{children}</main>
        </div>
    );
}

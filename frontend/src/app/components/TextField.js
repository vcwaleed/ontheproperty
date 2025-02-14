'use client'
import { useState } from "react";

export default function TextField({ type, placeholder, value, onChange }) {
    return (
        <input
            className="w-full px-8 py-4 mb-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
        />
    );
}
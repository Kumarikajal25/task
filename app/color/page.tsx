"use client"
import React, { useState } from 'react';

const initialColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966'];

const ColorPalette: React.FC = () => {
    const [colors, setColors] = useState<string[]>(initialColors);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.dataTransfer.setData('colorIndex', index.toString());
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        const draggedIndex = parseInt(e.dataTransfer.getData('colorIndex'));
        if (draggedIndex === index) return;

        const updatedColors = [...colors];
        const [removed] = updatedColors.splice(draggedIndex, 1);
        updatedColors.splice(index, 0, removed);

        setColors(updatedColors);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleChangeColor = (index: number, newColor: string) => {
        const updatedColors = colors.map((color, i) => (i === index ? newColor : color));
        setColors(updatedColors);
    };

    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-4">Color Palette</h1>
            <div className="flex space-x-2">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}
                        className="p-2"
                    >
                        <input
                            type="color"
                            value={color}
                            onChange={(e) => handleChangeColor(index, e.target.value)}
                            className="w-16 h-16 border-2 border-gray-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorPalette;

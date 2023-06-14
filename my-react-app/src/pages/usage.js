import React, { useState, useEffect } from "react";
import "./usage.css";
function Usage() {
    const [value, setValue] = useState(0);
    const [color, setColor] = useState("white");
    
    useEffect(() => {
        return () => {
         
        };
    }, [value]);
    return (
        <div>
        <div className="usage">
            <div className="usage-item" style={{ background: color }}>
                <button
                    onClick={() => {
                        setValue((state) => {
                            return state + 1;
                        });
                    }}
                >
                    Increment
                </button>
                <label>{value}</label>
                <button
                    onClick={() => {
                        setValue(value - 1);
                    }}
                >
                    decrement
                </button>
            </div>
            <button
                onClick={() => {
                    setColor("green");
                }}
            >
                Green
            </button>
            <button
                onClick={() => {
                    setColor("blue");
                }}
            >
                Blue
            </button>
             </div>
             
        </div>
    );
}
export default Usage;

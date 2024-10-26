import { useState } from "react";
import data from "./data.js";
import './style.css';

export default function Accordian() {
    // State for single selection
    const [selected, setSelected] = useState(null);

    // State to enable/disable multiple selection mode
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);

    // State for storing multiple selected IDs
    const [multiple, setMultiple] = useState([]);

    // Handler for single item selection
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    // Handler for multiple item selection
    function handleMultiSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) {
            // Add ID if not already selected
            copyMultiple.push(getCurrentId);
        } else {
            // Remove ID if already selected
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple); // Update state with new list
    }
    console.log(selected , multiple)
    return (
        <div className="wrapper">
            {/* Button to toggle between single and multiple selection modes */}
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                Enable Multi Selection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div key={dataItem.id} className="item">
                                <div 
                                    onClick={
                                        enableMultiSelection
                                            ? () => handleMultiSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)
                                    }
                                    className="title"
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    // Conditionally render content based on selection state
                                    selected === dataItem.id || multiple.includes(dataItem.id) ? (
                                        <div className="content">{dataItem.answer}</div>
                                    ) : null
                                }
                            </div>
                        ))
                    ) : (
                        <div>Not found</div>
                    )
                }
            </div>
        </div>
    );
}

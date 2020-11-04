import React, { useState } from 'react';

function HookItems() {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);

    const addItem = () => {
        setItems([...items, { id: count + 1, value: count + 1 }]);
        setCount(prevCount => prevCount + 1);
    }

    const editItem = id => {
        const userInput = prompt('Input the number\'s new value:');
        if (/^\d+$/.test(userInput)) {
            setItems(items.map(item => {
                if (item.id === id) {
                    item.value = userInput;
                }
                return item;
            }));
        }
    }

    const deleteItem = id => {
        setItems(items.filter(item => item.id !== id));
    }

    return (<React.Fragment>
        <ul>
            { items.map(item => (<li key = { item.id }>{ item.value }
            <button onClick = { () => editItem(item.id) }>Edit</button>
            <button onClick = { () => deleteItem(item.id) }>Delete</button>
            </li>)) }
        </ul>
        <button onClick = { addItem }>Add a number</button>
    </React.Fragment>);
}

export default HookItems;

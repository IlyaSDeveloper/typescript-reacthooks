import React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const handleButtonClick = () => {
        setCount(count+1)
    }

    return (
        <div className="counter">
            <p>Clicked Count = {count} </p>
            <button onClick={handleButtonClick}>Click Me</button>
        </div>
    )
}

export default Counter
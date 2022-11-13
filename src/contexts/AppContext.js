import React, { createContext, useState } from 'react'


// Context
export const AppContext = createContext({
    counter: 0,
    setCounter: () => null,
})

// Provider Component
export const AppProvider = ({ children }) => {
    const initialCount = localStorage.getItem('counter')
    const [counter, setCounter] = useState(Number(initialCount));

    const handleSetCounter = (newNumber) => {
        localStorage.setItem('counter', newNumber)
        setCounter(newNumber)
    }

    return (
        <AppContext.Provider value={{ counter, setCounter: handleSetCounter }}>
            {children}
        </AppContext.Provider>
    )
}

import React, { useEffect, useState } from 'react'

import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkToggle', darkMode)

    const handleToggle = (event) => {
        setDarkMode(!darkMode)
    }
    
    const bodyElem = document.querySelector('.body')

    useEffect(() => {
        {darkMode === false 
            ? bodyElem.classList.add('dark-mode')
            : bodyElem.classList.remove('dark-mode')}
        console.log('bodyElem', bodyElem)
        console.log('darkMode in useEffect', darkMode)
    }, [darkMode])

    return handleToggle()
}

export default useDarkMode;
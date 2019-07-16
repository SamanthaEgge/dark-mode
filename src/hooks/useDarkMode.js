import { useEffect } from 'react'

import useLocalStorage from './useLocalStorage'

const useDarkMode = (key, initialValue) => {
    console.log('requested cl', key, initialValue)
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    // const handleToggle = (event) => {
    //     event.preventDefault()
    //     setDarkMode(!darkMode)
    // }
    console.log('weve reached useDarkMode')

    useEffect(() => {
        {darkMode === true
            ? document.body.classList.add('dark-mode')
            : document.body.classList.remove('dark-mode')}
        // console.log('bodyElem', bodyElem)
        console.log('darkMode in useEffect', darkMode)
    }, [darkMode])

    return (
        [darkMode, setDarkMode]
    )
}

export default useDarkMode;
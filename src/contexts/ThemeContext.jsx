import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [ isDarkTheme, setIsDarkTheme ] = useState( false );
    const [ theme, setTheme ] = useState( 'light' );
    const currentTheme = localStorage.getItem('theme');
    
    useEffect( () => {

        if( currentTheme === 'dark' ) {
            setIsDarkTheme( true );
            setTheme( 'dark' );
        } else {
            setIsDarkTheme( false );
            setTheme( 'light' );
        }
    
    }, [] );

    const changeTheme = () => {

        setIsDarkTheme( !isDarkTheme );

        if( currentTheme === 'dark' ) {
            localStorage.setItem('theme', 'light');
            setTheme( 'light' );
        } else {
            localStorage.setItem('theme', 'dark');
            setTheme( 'dark' );
        }
        
    }
    
    return (
        <ThemeContext.Provider value={{ isDarkTheme, changeTheme, theme }} >
            { children }
        </ThemeContext.Provider>
    );

}

export default ThemeProvider;
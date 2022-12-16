import { getDocumentTheme } from '@nextui-org/react';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

const useContext = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {

        let theme = window.localStorage.getItem('data-theme');
        setIsDark(theme === 'dark');

        const observer = new MutationObserver((mutation) => {
            let newTheme = getDocumentTheme(document?.documentElement);
            setIsDark(newTheme === 'dark');
        })

        observer.observe(document?.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme', 'style']
        })
        return () => observer.disconnect();
    }, []);

    const authInfo = {isDark}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default useContext;
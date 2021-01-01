import React, { createContext, useContext, useEffect, useState } from 'react'
import userInfo from '../useInfo'
import App from '../App';

import vi from '../locales/vi.json'
import en from '../locales/en.json'

import * as RNLocalize from 'react-native-localize'

const AuthContext = createContext()
const UserContext = createContext()
const LocaleContext = createContext()

const locales = {
    en, vi
}

const ContextProvider = ()=>{
    const [isAuth, setAuth] = useState(true)
    const [user, setUser] = useState(userInfo)
    const [locale, setLocale] = useState('en')

    useEffect(() => {
        //choose best locale from device if it match locales object
        const currentLocale =
            RNLocalize.findBestAvailableLanguage(Object.keys(locales));

        // console.log(RNLocalize.getLocales());
        setLocale(currentLocale?.languageTag || 'en')
    }, [])

    const localeValue = {...locales[locale]}

    return(
        <AuthContext.Provider value={{isAuth, setAuth}}>
            <UserContext.Provider value={{user, setUser}}>
                <LocaleContext.Provider value={{localeValue, locale, setLocale}}>
                    <App/>
                </LocaleContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}

export {AuthContext, UserContext, LocaleContext}

export default ContextProvider
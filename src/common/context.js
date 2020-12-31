import React, { createContext, useContext, useState } from 'react'
import userInfo from '../useInfo'
import App from '../../App';

const AuthContext = createContext()
const UserContext = createContext()

const ContextProvider = ()=>{
    const [isAuth, setAuth] = useState(true)
    const [user, setUser] = useState(userInfo)
    return(
        <AuthContext.Provider value={{isAuth, setAuth}}>
            <UserContext.Provider value={{user, setUser}}>
                <App/>
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}
const useAuth = ()=> useContext(AuthContext)
const useUser = ()=> useContext(UserContext)

export {AuthContext, UserContext, useAuth, useUser}

export default ContextProvider
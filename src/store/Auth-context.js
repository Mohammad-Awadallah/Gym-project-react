import { createContext,useState } from "react";


const AuthContext = createContext({
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{},
})


export const AuthContextProvider = (props)=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false)


    const loginHandler = ()=>{
        setIsLoggedIn(true)
    }
    const logoutHandler = ()=>{
        setIsLoggedIn(false)
    }

    const context = {
        isLoggedIn:isLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }

    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthContext
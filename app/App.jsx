'use client'
import { useState, useEffect } from "react";

import { getJWT, setJWT, removeJWT } from "@api/cookies-utils";
import { requestUser } from "@api/api-utils";
import { endpoints } from "@api/config";
import { AuthContext } from "@context/app-context";

import { Header } from '@components/Header/Header';
import { Footer } from "@components/Footer/Footer";

export const App = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");

    const login = (user, token) => {
        setIsAuth(true);
        setUser(user);
        setToken(token);
        setJWT(token);
    };

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        setToken("");
        removeJWT();
    }

    const checkAuth = async () => {
        const token = getJWT();
        if (token) {
            const me = await requestUser(endpoints.me, token);
            if (me) {
                login(me, token);
            } else {
                logout();
            }
        }
    }

    useEffect(() => {
        async function check() {
            await checkAuth();
        }

        check();
    }, []);

    return(
        <AuthContext.Provider value={{ isAuth, user, token, login, logout }}>
            <Header/>
            {children}
            <Footer/>
        </AuthContext.Provider>
    )
}
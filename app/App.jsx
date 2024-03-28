'use client'
import { useEffect } from "react";
import { useStore } from "@store/app-store";

import { Header } from '@components/Header/Header';
import { Footer } from "@components/Footer/Footer";

export const App = ({ children }) => {
    const { checkAuth } = useStore()

    useEffect(() => {
        checkAuth()
    }, []);

    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
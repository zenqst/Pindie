'use client'
import { useEffect, useState } from 'react'
import { useStore } from "@store/app-store";
import { useRouter } from "next/navigation";
import { useAuth } from "@api/hooks";

import Styles from './RegisterForm.module.css';

export const RegisterForm = () => {
    const [regData, setRegData] = useState({ username: "", email: "", password: "", })

    const { isPending, error, fetchAuth } = useAuth()
    const { user, login } = useStore();

    const router = useRouter()

    useEffect(() => {
        let timer;
        if (user) {
            timer = setTimeout(() => {
                router.push('/')
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [user]);

    const handleInput = (e) => {
        setRegData({ ...regData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { user, jwt } = await fetchAuth('/local/register', regData)

        if (!error) login(user, jwt)
    };

    return (
        <form className={Styles.form} onSubmit={handleSubmit}>
            <h2 className={Styles.formTitle}>Регистрация</h2>
            <div className={Styles.formFields}>
                <label className={Styles.formField}>
                    <span className={Styles.formFieldTitle}>Username</span>
                    <input className={Styles.formFieldInput} required name="username" onInput={handleInput} type="name"
                           placeholder="zenq_st"/>
                </label>
                <label className={Styles.formField}>
                    <span className={Styles.formFieldTitle}>Email</span>
                    <input className={Styles.formFieldInput} required name="email" onInput={handleInput} type="email"
                           placeholder="zenqst@world.com"/>
                </label>
                <label className={Styles.formField}>
                    <span className={Styles.formFieldTitle}>Пароль</span>
                    <input className={Styles.formFieldInput} required name="password" onInput={handleInput} type="password"
                           placeholder='***********'/>
                </label>
            </div>
            <p className={`${Styles.error} ${ error && Styles.showError }`}>{ error && error.map((err, index) => (
                <span key={index}> { err.message } </span>)) }</p>
            <div className={Styles.formActions}>
                <button className={Styles.formSubmit} disabled={isPending} type="submit">{ isPending ? "Загрузка..." : "Зарегистрироваться"}</button>
            </div>
        </form>
    )
};

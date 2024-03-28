'use client'
import { useEffect, useState } from 'react'
import { useStore } from "@store/app-store";
import { useAuth } from "@api/hooks";

import Styles from './AuthForm.module.css';
import Link from "next/link";

export const AuthForm = ({ closePopup }) => {
  const [authData, setAuthData] = useState({ identifier: "", password: "" })

  const { isPending, data, error, fetchAuth } = useAuth()

  const { user, login } = useStore();
  
  useEffect(() => {
    let timer;
    if (user) {
      timer = setTimeout(() => {
        closePopup();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [user]);
  
  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user, jwt } = await fetchAuth('/local', authData)

    if (!error) login(user, jwt)
  };

  
  return (
      <form className={Styles.form} onSubmit={handleSubmit}>
        <h2 className={Styles.formTitle}>Авторизация</h2>
        <div className={Styles.formFields}>
          <label className={Styles.formField}>
            <span className={Styles.formFieldTitle}>Email</span>
            <input className={Styles.formFieldInput} required name="identifier" onInput={handleInput} type="email"
                   placeholder="hello@world.com"/>
          </label>
          <label className={Styles.formField}>
            <span className={Styles.formFieldTitle}>Пароль</span>
            <input className={Styles.formFieldInput} required name="password" onInput={handleInput} type="password"
                   placeholder='***********'/>
          </label>
        </div>
        <p className={Styles.error}>{!error ? <Link href={'/register'}>Нет аккаунта? Зарегистрироваться</Link> : error && error.map((err, index) => (
            <span key={index}> { err.message } </span>
        ))}</p>
        <div className={Styles.formActions}>
          <button className={Styles.formSubmit} disabled={isPending}
                  type="submit">{isPending ? "Загрузка..." : "Войти"}</button>
        </div>
      </form>
  )
};

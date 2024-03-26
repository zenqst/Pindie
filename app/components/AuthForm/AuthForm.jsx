'use client'
import { useEffect, useState } from 'react'
import { useStore } from "@store/app-store";

import { authorize, isResponseOk, requestUser } from '@api/api-utils'
import { endpoints } from '@api/config'

import Styles from './AuthForm.module.css';

export const AuthForm = ({ closePopup }) => {
  const [authData, setAuthData] = useState({ identifier: "", password: "" })
  const [message, setMessage] = useState({ status: null, text: null })

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
    const userData = await authorize(endpoints.auth, authData);
    
    if (isResponseOk(userData)) {
      login(userData.user, userData.jwt)

      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };
  
  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <h2 className={Styles.formTitle}>Авторизация</h2>
      <div className={Styles.formFields}>
        <label className={Styles.formField}>
          <span className={Styles.formFieldTitle}>Email</span>
          <input className={Styles.formFieldInput} name="identifier" onInput={handleInput} type="email" placeholder="hello@world.com"/>
        </label>
        <label className={Styles.formField}>
          <span className={Styles.formFieldTitle}>Пароль</span>
          <input className={Styles.formFieldInput} name="password" onInput={handleInput} type="password" placeholder='***********'/>
        </label>
      </div>
      {message.status && (<p className={Styles.formMessage}>{message.text}</p>)}
      <div className={Styles.formActions}>
        <button className={Styles.formReset} type="reset">Очистить</button>
        <button className={Styles.formSubmit} type="submit">Войти</button>
      </div>
    </form>
  ) 
};

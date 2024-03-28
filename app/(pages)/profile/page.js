'use client'
import Styles from './page.module.css'
import { useStore } from "@store/app-store";

export default function Profile() {
    const { user } = useStore()

    return(
        <main className={Styles.mainInner}>
            <h2 className={Styles.profileTitle}>Привет, {user.username}!</h2>
            <p className={Styles.additionalInfo}>Email: {user.email}</p>
        </main>
    )
}
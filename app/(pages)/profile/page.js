'use client'
import Styles from './page.module.css'
import { useStore } from "@store/app-store";
import { useRouter } from "next/navigation";
import { Preloader } from "@components/Preloader/Preloader";

export default function Profile() {
    const { user, logout } = useStore()
    const router = useRouter()

    const handleLogout = () => {
        router.push('/')
        logout()
    };

    return(
        <main className={Styles.mainInner}>
            { user ? (
                <>
                    <h2 className={Styles.profileTitle}>Привет, {user.username}!</h2>
                    <div className={Styles.additionalActions}>
                        <p className={Styles.additionalInfo}>Email: {user.email}</p>
                        <button onClick={handleLogout} className={`button ${Styles.logoutLink}`}>Выйти из аккаунта</button>
                    </div>
                </>
            ) : (
                <Preloader/>
            )}
        </main>
    )
}

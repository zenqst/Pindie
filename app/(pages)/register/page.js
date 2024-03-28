import { RegisterForm } from '@components/RegisterForm/RegisterForm'
import Styles from './page.module.css'

export default function RegisterPage(){
    return(
        <main className={Styles.mainInner}>
            <RegisterForm/>
        </main>
    )
}
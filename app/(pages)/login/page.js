import { AuthForm } from '@components/AuthForm/AuthForm'
import Styles from './page.module.css'

export default function LoginPage() {
	return(
		<main className={Styles.mainInner}>
			<AuthForm/>
		</main>
	)
}
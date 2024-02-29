import Styles from './Footer.module.css'

export const FooterLink = ({ title, href }) => {
	return (
		<li className={Styles.socialListItem}>
			<a href={href} className={`button ${Styles.socialListLink}`}>
				{title}
			</a>
		</li>
	)
}
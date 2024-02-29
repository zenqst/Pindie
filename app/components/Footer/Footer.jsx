'use client'
import { FooterLink } from '@components/Footer/FooterLink'
import Link from 'next/link'
import Styles from './Footer.module.css';
import { usePathname } from 'next/navigation'

export const Footer = () => {
	const pathName = usePathname();
	
	return (
		<footer className={Styles.footer}>
			{pathName === "/" ? (
				<div className={Styles.footerLogo}>
					<span className={Styles.footerLogoName}>pindie</span>
					<span className={Styles.footerLogoCopy}>, XXI век</span>
				</div>
			) : (
				<Link href='/' className={Styles.footerLogo}>
					<span className={Styles.footerLogoName}>pindie</span>
					<span className={Styles.footerLogoCopy}>, XXI век</span>
				</Link>
			)}
			<ul className={Styles.socialList}>
				<FooterLink title={'YT'} href={''}/>
				<FooterLink title={'VK'} href={''}/>
				<FooterLink title={'TG'} href={''}/>
			</ul>
		</footer>
	);
};

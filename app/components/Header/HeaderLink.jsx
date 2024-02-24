'use client'
import Link from 'next/link'
import Styles from './Header.module.css';
import { usePathname } from "next/navigation";

export const HeaderLink = ({ title, href }) => {
	const pathname = usePathname();
	
	return (
		<li className={Styles['menu__item']}>
			<Link href={`/${href}`} className={`${Styles['menu__link']} ${pathname === `/${href}` ? Styles["menu__link_active"] : ""}`}>
				{title}
			</Link>
		</li>
	);
};

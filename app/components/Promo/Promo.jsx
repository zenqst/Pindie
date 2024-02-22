'use client'
import Styles from './Promo.module.css';
import { useState, useEffect } from 'react';
import { useClipboard } from 'use-clipboard-copy';

export const Promo = () => {
	const [codeIsVisible, setCodeIsVisible] = useState(false)
	
	const handleButtonClick = () => {
	  setCodeIsVisible(true)
		clipboard.copy('WEBTEENS10')
	}
	
	useEffect(() => {
		let timeout
		
		if (codeIsVisible){
			timeout = setTimeout(() => {
				setCodeIsVisible(false)
			}, 5000);
		}
		
		return () => {
			clearTimeout(timeout);
		};
	}, [codeIsVisible])
	
	const clipboard = useClipboard();
	
	return (
		<section className={Styles['promo']}>
			<div className={Styles['promo__description-block']}>
				<h2 className={Styles['promo__title']}>Твой промо-код</h2>
				<p className={Styles['promo__description']}>
					Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
				</p>
				<button onClick={handleButtonClick} className={`button ${Styles['promo__button']}`}>
					{codeIsVisible ? <span className={Styles['promo-code']}>WEBTEENS10</span> : 'Получить код'}
				</button>
			</div>
			<img src='./images/promo-illustration.svg' alt='Собака' className={Styles['promo__image']} />
		</section>
	);
};

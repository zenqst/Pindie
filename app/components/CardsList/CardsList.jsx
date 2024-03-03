'use client'
import { useEffect, useState } from 'react'

import { getGamesByCategory } from '@api/api-utils'
import { endpoints } from '@api/config'

import { Preloader } from '@components/Preloader/Preloader'
import { Card } from '@components/Card/Card';

import Styles from './CardsList.module.css';

export const CardsList = ({ category, title }) => {
	
	const [data, setData] = useState(null)
	
	useEffect(() => {
		const categoryData = async () => setData(await getGamesByCategory(endpoints.category+category))
		categoryData()
	}, [])
	
	if (!data){
		return <Preloader/>
	}
	
	return (
		<section className={Styles.listSection}>
			<h2 className={Styles.listSectionTitle} id={category}>
				{title}
			</h2>
				<ul className={Styles.cardsList}>
					{data.map((item, index) => (
						<Card {...item} key={index} />
					))}
				</ul>
		</section>
	);
};

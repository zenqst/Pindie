'use client'
import { useGetDataByCategory } from "@api/hooks";

import { endpoints } from '@api/config'

import { Preloader } from '@components/Preloader/Preloader'
import { Card } from '@components/Card/Card';

import Styles from './CardsListSection.module.css';

export const CardsList = ({ data }) => {
	return (
				<ul className={Styles.cardsList}>
					{data.map((item, index) => (
						<Card {...item} key={index} />
					))}
				</ul>
	);
};

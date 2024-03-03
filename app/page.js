'use client'

import { useEffect } from 'react'

import { endpoints } from '@api/config'
import { authorize } from '@api/api-utils'

import { Banner } from '@components/Banner/Banner';
import { CardsList } from '@components/CardsList/CardsList';
import { Promo } from '@components/Promo/Promo';

export default function Home() {
	return (
		<main className='main'>
			<Banner />
			<CardsList title={'Популярные'} category={'popular'}/>
			<CardsList title={'Новые'} category={'new'}/>
			<Promo />
		</main>
	);
}

'use client'
import { Banner } from '@components/Banner/Banner';
import { CardsListSection } from '@components/CardsListSection/CardsListSection';
import { Promo } from '@components/Promo/Promo';

export default function Home() {
	return (
		<main className='main'>
			<Banner />
			<CardsListSection title={'Популярные'} category={'popular'} type={'slider'}/>
			<CardsListSection title={'Новые'} category={'new'} type={'slider'}/>
			<Promo />
		</main>
	);
}

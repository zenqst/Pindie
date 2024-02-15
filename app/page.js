import { Banner } from '@components/Banner/Banner';
import { CardsList } from '@components/CardsList/CardsList';
import { Promo } from '@components/Promo/Promo';
import { categories } from '@data/data';

export default function Home() {
	return (
		<main className='main'>
			<Banner />
			{categories.map((info, index) => (
				<CardsList {...info} key={index} />
			))}
			<Promo />
		</main>
	);
}

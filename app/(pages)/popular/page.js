import { CardsListSection } from '@components/CardsListSection/CardsListSection'

export default function Popular() {
	return(
		<main className={"main-inner"}>
			<CardsListSection category={'popular'} title={'Популярные'}/>
		</main>
	)
}
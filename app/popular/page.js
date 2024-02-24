import { CardsList } from '@components/CardsList/CardsList'

export default function Popular() {
	return(
		<main className={"main-inner"}>
			<CardsList category={'popular'} title={'Популярные'}/>
		</main>
	)
}
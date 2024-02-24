import { CardsList } from '@components/CardsList/CardsList'

export default function New() {
	return(
		<main className={"main-inner"}>
			<CardsList category={'new'} title={'Новинки'}/>
		</main>
	)
}
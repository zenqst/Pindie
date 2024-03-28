import { CardsListSection } from "@components/CardsListSection/CardsListSection";

export default function New() {
	return(
		<main className={"main-inner"}>
			<CardsListSection category={'new'} title={'Новинки'}/>
		</main>
	)
}
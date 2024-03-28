'use client'
import { useGetDataByCategory } from "@api/hooks";

import Styles from "./CardsListSection.module.css";

import { CardsList } from "./CardsList";
import { CardsSlider } from "./CardsSlider";

import { endpoints } from "@api/config";

import { Preloader } from "@components/Preloader/Preloader";

export const CardsListSection = ({ category, title, type }) => {
    const { data, pending } = useGetDataByCategory(endpoints.category, category)

    if (pending){
        return <Preloader/>
    }

    return (
        <section className={Styles["listSection"]}>
            <h2 className={Styles["listSectionTitle"]} id={category}>
                {title}
            </h2>
            {type === 'slider' ? <CardsSlider data={data} /> : <CardsList data={data} />}
        </section>
    );
};
import {useState, useEffect, useRef} from 'react';
import { getGamesByCategory } from './api-utils';
import { endpoints } from "@api/config";

export const useGetDataByCategory = (endpoint, category) => {
    const [data, setData] = useState(null);
    const [ pending, setPending ] = useState(true)
    const refMount = useRef()

    useEffect(() => {
        async function fetchData() {
            const data = await getGamesByCategory(`${endpoints.category}=${category}`);
            setData(data);
            setPending(false)
        }
        fetchData();
    }, [refMount]);

    return { data, pending };
};